import React from "react";

const Counter = ({value}) => {
    return(
        <div>
            <span>{`Всего каналов: ${value} `}</span>
        </div>
    )
}

export default Counter