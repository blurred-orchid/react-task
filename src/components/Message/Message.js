import React from "react";
import MyButton from "../MyButton/Mybutton";
import cl from './Message.module.css'
import { AiFillCloseCircle } from "react-icons/ai";

const Message = ({vis, setVis, mes}) => {
        if(!vis){
            return(<div></div>)
        }
        return(
        <div className={cl.message_body}>         
            <div className={cl.head}>               
                <p>Ошибка</p>
                <AiFillCloseCircle 
                   onClick={() => setVis(false)}                        
                />
            </div>
            <div className={cl.message}>
                {mes}
            </div>
        </div>)
    }


export default Message