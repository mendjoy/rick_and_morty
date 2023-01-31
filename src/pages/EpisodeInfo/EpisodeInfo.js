import { Link } from 'react-router-dom';
import { useEpisodeDetails } from "../../hooks/useEpisodeDetails";

//css
import styles from "./EpisodeInfo.module.css"

import CharacterCard from '../../components/CharacterCard/CharacterCard';



const EpisodeInfo = () => {

  const { episodeInfo } = useEpisodeDetails();


  return (

    <div>
      { episodeInfo && (
        <div>
          <h1>{episodeInfo.name}</h1>
            
            <p>{episodeInfo.episode}</p>
            <p>{episodeInfo.air_date}</p>
           
        </div>
      )}
    </div>
  )
}   

export default EpisodeInfo