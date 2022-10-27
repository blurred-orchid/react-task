import React from "react"
import cl from './Input.module.css'
import {AiOutlineSearch} from 'react-icons/ai'

const Input = (props) => {
    
    return(
        <input type={"text"} className={cl.My_Input} {...props} />
    )
}

export const Search = (props) =>{
    
    return(
        <div className={cl.Search}>
            <div className={cl.Search_icon}>
                <AiOutlineSearch />
            </div>   
            <Input className={cl.Search_input} {...props}/>
            
        </div>
    )
}

export default Input