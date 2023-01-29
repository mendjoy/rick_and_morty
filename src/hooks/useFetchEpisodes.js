import { useState, useEffect } from "react"

 export const useFetchEpisodes = () => {

    const [episodes, setEpisodes] = useState([]);

    const url = "https://rickandmortyapi.com/api/episode";

    const fetchDataEpisodes = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setEpisodes(data.results))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchDataEpisodes(url);
        
    },[])

   return { episodes }
  
}
