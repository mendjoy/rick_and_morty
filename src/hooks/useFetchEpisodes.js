import { useState, useEffect } from "react"

 export const useFetchEpisodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({})

    const url = "https://rickandmortyapi.com/api/episode";

    const fetchDataEpisodes = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setInfo(data.info);
                setEpisodes(data.results);
            })
            .catch(err => console.log(err))
    };

    const onPrevious = () => {
        fetchDataEpisodes(info.prev)
       }
    
       const onNext = () => {
        fetchDataEpisodes(info.next)
       }
    

    useEffect(() => {
        fetchDataEpisodes(url);
        
    },[])

   return { episodes, info, onPrevious, onNext }
  
}
