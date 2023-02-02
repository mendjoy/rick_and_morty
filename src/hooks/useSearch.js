import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";

 export const useSearch = () => {

    const [searchParams] = useSearchParams();

    const [ searchCharacter, setSearchCharacter] = useState([]);
    const query = searchParams.get("q");
   

    const url = "https://rickandmortyapi.com/api/character/";

    const getSearch = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setSearchCharacter(data.results))
            .catch(err => console.log(err))
    };

    useEffect(() => {

        getSearch(`${url}?name=${query}`);
        
    },[query])

   return { searchCharacter, query }
  
}
