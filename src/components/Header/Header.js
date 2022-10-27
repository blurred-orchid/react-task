import cl from './Header.module.css'
import MyButton from '../MyButton/Mybutton'
import { Link } from "react-router-dom";

const Header = ({children, input, filter}) => {
    return(
        <header className={cl.Header}>                           
                {children
                    ? <div className={cl.Header_top}>{children}</div>
                    : <DefaultNav input={input} filter={filter}/>      
                }                                 
        </header>
    )
}

const DefaultNav = ({input, filter}) => {
   
    return (<div className={cl.Header_top}>                
        <div className={cl.title}>Каналы</div>
        {input}
        {filter}
        <Link to="/channel">
            <MyButton>
                Добавить 
            </MyButton>
        </Link> 
    </div>)
}

export default Header
