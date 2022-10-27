import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import { Search } from "../components/Input/Input";
import List from "../components/List/List";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterData, setFilterData] = useState('none');
  const input = <Search value ={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder = "Поиск"/>
  const filter = <select onChange={(e) => setFilterData(e.target.value)} value={filterData}>
                  <option value="none"> Без фильтра</option>
                  <option value="vk"> ВКонтакте</option>
                  <option value="telegram"> Телеграм</option>
                  <option value="youtube">YouTube</option>
                </select>
  
  useEffect(() => {
    document.title = 'Список каналов'
  }, [])

  return(
      <div>
        <Header input={input} filter={filter}/>      
        <main>
          <List searchQuery={searchQuery} filterData={filterData}/>
        </main>        
      </div>
  )
}

export default Home