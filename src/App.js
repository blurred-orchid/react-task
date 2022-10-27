import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyRouters from './components/MyRouters'
const App = () => {

  return(
    <BrowserRouter> 
      <MyRouters/>
    </BrowserRouter> 
  )
}

export default App