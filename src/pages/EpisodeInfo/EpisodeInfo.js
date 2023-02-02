
import { useEpisodeDetails } from "../../hooks/useEpisodeDetails";

//css
import styles from "./EpisodeInfo.module.css"


const EpisodeInfo = () => {

  const { episodeInfo } = useEpisodeDetails();
 
  return (

    <div className={styles.container}>
      { episodeInfo && (
        <div className={styles.info_container}>
          <h1>{episodeInfo.name}</h1>
            
            <p><span>Episode: </span>{episodeInfo.episode}</p>
            <p><span>Air date: </span>{episodeInfo.air_date}</p>
            <p><span>Characters: </span>{episodeInfo.characters.length}</p>
            
            
        </div>
      )}
    </div>
  )
}   

export default EpisodeInfo