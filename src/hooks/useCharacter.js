import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

 export const useCharacter = () => {

    const { id } = useParams();

    const [characterInfo, setCharacterInfo] = useState(null);

    const url = "https://rickandmortyapi.com/api/character";

    const dataCharacter = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacterInfo(data))
            .catch(err => console.log(err))
    };

    useEffect(() => {

        dataCharacter(`${url}/${id}`);
        
    },[])

   return { characterInfo }
  
}

