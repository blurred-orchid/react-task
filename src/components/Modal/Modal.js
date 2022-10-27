import React from "react";
import cl from './Modal.module.css';
import MyButton from "../MyButton/Mybutton";
import {AiFillCloseCircle} from "react-icons/ai"

const Modal = ({children, visible, setVisible, title}) => {
    const classList = [cl.Modal];
    const close = () => setVisible(false);
    if(visible){
        classList.push(cl.active)
    }
    return(
        <div className={classList.join(' ')} onClick={close}>
            <div className={cl.Modal_body} onClick={(e) => e.stopPropagation()}>
                <div className={cl.Modal_head}>
                    <span>{title}</span>                    
                    <MyButton onClick = {close} revers="true">
                        <AiFillCloseCircle/>
                    </MyButton>
                </div>
                <div className={cl.Modal_content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal