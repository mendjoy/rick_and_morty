import { useState, useEffect } from "react"

 export const useFetch = () => {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    const url = "https://rickandmortyapi.com/api/character";

    const fetchDataCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                setCharacters(data.results);
                setInfo(data.info);
            })
            
            .catch(err => console.log(err))
    };

    const onPrevious = () => {
        fetchDataCharacters(info.prev)
       }
    
       const onNext = () => {
        fetchDataCharacters(info.next)
       }
    

   
    useEffect(() => {
        fetchDataCharacters(url);
        
    },[])

   return  { characters, info, onPrevious, onNext}
  
}



