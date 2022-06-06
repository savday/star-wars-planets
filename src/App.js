import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header"
import CardList from "./components/CardList"

const App = () => {
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const fetchItems = async () => {
    const resp = await axios(`https://swapi.py4e.com/api/planets`)

    console.log(resp.data.results)

    setItems(resp.data.results)
    setIsLoading(false)
  }

  fetchItems()
}, [])


  return (
    <div className="tc">
      <Header />
      <CardList isLoading={isLoading} items={items} />
    </div>
  )
}

export default App;