import React, { useEffect, useMemo, useState } from "react";
import cl from './List.module.css';
import Counter from "../Counter/Counter";
import ListItem from "../ListItem/ListItem";
import Loading from "../Loading/Loading";
import Modal from '../Modal/Modal'
import MyButton from "../MyButton/Mybutton";
import PostService from '../../api/PostService';
import Message from "../Message/Message";

const List = ({searchQuery, filterData}) => {
    const [currentItem, setCurrentItem] = useState();
    const [visibleModal, setVisibleModal] = useState(false); 
    const [loading, setLoading] = useState(true);  
    const [content, setContent] = useState([])
    
    const [messageVisible, setMessageVisible] = useState(false);
    const [messageText, setMessageText] = useState('');

    useEffect(() => {
       PostService.getAll((data) => {
        setContent(data.data);
        setLoading(false)
    },
        error =>
        {
            setMessageText(error);
            setMessageVisible(true);        
        }
    )
       
    }, [])

    const filtered = useMemo(() => {
        if(filterData === 'none'){
            return content;
        }
        return content.filter(el => el.type === filterData)
    }, [content, filterData])

    const filteredSearch = useMemo(() => {  
        if(searchQuery.length === 0) return filtered;    
        return filtered.filter(el => el.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [filtered, searchQuery])

    const changeVisible = () => {
        setVisibleModal(!visibleModal);
    }
    const del = () => {
        PostService.delate(currentItem, () => {
            changeVisible();
            setContent(
                content.filter((el) => el._id !== currentItem)
            );
        },
        error =>
        {
            setMessageText(error);
            setMessageVisible(true);        
        })
    }

    return(
        <div className={cl.List}>
            <Message vis={messageVisible} setVis={setMessageVisible} mes={messageText.toString()}/> 
            <Modal visible={visibleModal} setVisible={setVisibleModal} title={'Удалить канал?'}> 
                <div className={cl.Modal_button}>
                    <MyButton big={'true'} onClick={del}> Да </MyButton>
                    <MyButton big={'true'} onClick={changeVisible}>Нет</MyButton>
                </div>
            </Modal>  
            
            <Counter value = {filteredSearch.length}/>
            <div>
                {   loading
                    ?<Loading />
                    :filteredSearch.map((item) => 
                        <ListItem 
                            key={item._id}
                            value={item}
                            onClick={() => {
                                changeVisible(); 
                                setCurrentItem(item._id)
                                }}                                    
                    /> )                                                     
                }
            </div>            
        </div>
    )
}

export default List