import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";

const api = {
  base: 'https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR'
}

function App() {

  const [crypto, setCrypto] = useState([])
  const [search, setSearch] = useState('')

useEffect(() => {
  fetch(`${api.base}`)
  .then(res => res.json())
  .then(result => {
    setCrypto(result)
    console.log(result)
  })
}, [])

console.log(search)

  return (
    <div>
      <SearchBar setSearch={setSearch} />
    </div>
  );
}

export default App;
