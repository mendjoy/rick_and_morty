import { useState, useEffect } from "react"

 export const useFetch = () => {

    const [characters, setCharacters] = useState([]);

    const url = "https://rickandmortyapi.com/api/character";

    const fetchDataCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchDataCharacters(url);
        
    },[])

   return { characters }
  
}



