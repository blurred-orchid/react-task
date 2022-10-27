import React from "react";
import cl from './Loader.module.css';

const Loading = () =>{
    return(
        <div className={cl.parent}>
            <div className={cl.Loader}>
                <div className={cl.lds_facebook}><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}

export default Loading