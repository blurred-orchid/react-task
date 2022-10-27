import React from 'react'
import cl from './MyButton.module.css'
const MyButton = (props) => {
    const classNames = [cl.MyButton]

    if(props.revers){
        classNames.push(cl.MyButton_revers);
    }

    if(props.big){
        classNames.push(cl.big);
    }

    return(
        <button className={classNames.join(' ')} {...props}>{props.children}</button>
    )
}



export default MyButton