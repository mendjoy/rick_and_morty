import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

 export const useEpisodeDetails = () => {

    const { id } = useParams();

    const [ episodeInfo, setEpisodeInfo] = useState(null);

    const url = "https://rickandmortyapi.com/api/episode";

    const dataEpisode = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setEpisodeInfo(data);
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {

        dataEpisode(`${url}/${id}`);
        
    },[id])

   return { episodeInfo }
 }