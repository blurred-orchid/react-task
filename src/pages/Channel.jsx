import React, { useEffect, useState } from "react";
import cl from './Channel.module.css';
import Input from "../components/Input/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Link, useNavigate, useParams} from 'react-router-dom' 
import MyButton from '../components/MyButton/Mybutton'
import Header from "../components/Header/Header";
import { Validate } from "../validate";
import PostService from '../api/PostService.js'
import Loading from "../components/Loading/Loading";
import Message from "../components/Message/Message";

const Channel = () => {
    const id =  useParams().id; 
    const navigate = useNavigate();
    const [data, setData] = useState('');

    const [name, setName] = useState("");
    const [logo, setLogo] = useState("");
    const [type, setType] = useState("none");
    const [status, setStatus] = useState(true);

    const [showMessage, setShowMessage] = useState(false);
    const [messageText, setMessageText] = useState('')

    const submit = (e) => {
        e.preventDefault();
        let _data = {
            name : name,
            logo : logo,
            type : type,
            status : status ? 'active': 'inactive' 
        }
        
        if(Validate.isValid(_data)){
            if(id){
                PostService.edit(id, _data, 
                    () => navigate('/'),
                    error => {setMessageText(error); setShowMessage(true)}
                );    
            }else{
                PostService.save(_data,
                    () => navigate('/'),
                    error => {setMessageText(error); setShowMessage(true)}
                ); 
            }                                   
        }else{
            console.log('Не валидный данные');
        }                                  
    }

    useEffect(() => {
        if(id){
            document.title = 'Редактирование канала';
            PostService.getById(id, 
                 response =>  {setData(response.data)},
                 error => {setMessageText(error); setShowMessage(true)}      
            )
        }else{
            document.title = 'Создание канала';
        }                 
    }, [id])

    useEffect(() => {
        if (!data) return;
        setName(data.name);
        setLogo(data.logo);
        setType(data.type); 
        setStatus(data.status === 'active' ? true : false);
    }, [data])

    return(
        <div>  
        <Message vis={showMessage} setVis={setShowMessage} mes={messageText.toString()}/>      
            <Header>
                <div className={cl.nav}>
                    <Link to="/">
                        <MyButton revers={"true"}>
                            <AiOutlineArrowLeft/>                     
                        </MyButton> 
                    </Link>                        
                    <div>{id ? "Редактирование канала" : "Создание канала"}</div>                          
                </div>  
            </Header>
            {id && !data
                ?<Loading/>
                : <div></div>
            }
            
            <div>
                <form className={cl.form}>
                    <Input placeholder="Наименование"  value={name} onChange={(e) => setName(e.target.value)}/>
                        {!name ? <p>Заполните поле</p> : ""}
                    <Input placeholder="URL логотип" value={logo} onChange={(e) => setLogo(e.target.value)}/>
                        {!(logo.startsWith('http://') || logo.startsWith('https://')) ? <p>Начинается с http:// или https://</p> : ""}
                    <select value={type}  onChange={(e) => setType(e.target.value)}>
                        <option value="none" disabled> Не выбрано</option>
                        <option value="vk"> ВКонтакте</option>
                        <option value="telegram"> Телеграм</option>
                        <option value="youtube">YouTube</option>
                    </select>
                    <div className={cl.check}>
                        <span>Канал активен</span>
                        <input type={"checkbox"} onChange={() => setStatus(! status)} checked={status}/>
                    </div>

                    <MyButton 
                        big = {"true"}
                        type={"submit"}
                        onClick={submit}> 
                        Сохранить
                    </MyButton>

                </form>
            </div>             
        </div>
    )
}

export default Channel