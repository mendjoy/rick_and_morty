import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

 export const useCharacter = () => {

    const { id } = useParams();

    const [characterInfo, setCharacterInfo] = useState(null);
    const [characterOriginLocation, setCharacterOriginLocation] = useState([])
    const [characterLastLocation, setCharacterLastLocation] = useState([]);


    const url = "https://rickandmortyapi.com/api/character";

    const dataCharacter = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacterInfo(data);
                setCharacterOriginLocation((data.origin.url).split("/"));
                setCharacterLastLocation((data.location.url).split("/"));
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {

        dataCharacter(`${url}/${id}`);
        
    },[])

   return { characterInfo, characterOriginLocation, characterLastLocation}
  
}

