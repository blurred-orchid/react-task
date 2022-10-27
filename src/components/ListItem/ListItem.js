import React, {useState} from "react";
import MyButton from "../MyButton/Mybutton";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import Switch from "react-switch";
import {useNavigate } from 'react-router-dom' 

import cl from './ListItem.module.css';
import PostService from "../../api/PostService";

const ListItem = ({value, onClick}) => {
    const [status, setStatus] = useState(value.status === "active"? true : false)
    const router = useNavigate();
    return(
        <div className={cl.ListItem}>    
            <div className={cl.info}>
                <img src={value.logo} alt="Логотип"/>
                <div className={cl.info_name}>
                    <div className={cl.info_name_title}>{value.name}</div>
                    <div className={cl.info_name_type}>{value.type}</div>
                    
                </div>
            </div>
            <div className={[cl.info, cl.button].join(" ")}>
                <label 
                onClick ={() => {
                            let _value = {};
                            Object.assign(_value, value);
                            delete _value._id;
                            _value.status = value.status === "active" ? 'inactive': 'active';

                            PostService.update(value._id, _value, () => {}, () => {});  
                    }}>
                    <Switch                     
                     onChange={setStatus}
                     checked={status}
                     offColor={"#ccc"}
                     onColor={"#087ea4"}
                     />
                </label>

                <MyButton revers={"true"} onClick={ () => router(`/channel/${value._id}`)}>
                        <AiFillEdit/>
                </MyButton>  
            
                <MyButton revers={"true"} onClick={onClick}>
                    <AiFillDelete/>
                </MyButton> 
  
            </div>
        </div>
    )
}

export default ListItem