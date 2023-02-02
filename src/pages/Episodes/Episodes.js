//components
import EpisodesCard from "../../components/EpisodesCard/EpisodesCard";
import Pagination from "../../components/Pagination/Pagination";

//hooks
import { useFetchEpisodes } from "../../hooks/useFetchEpisodes";

//css
import styles from "./Episodes.module.css"


const Episodes = () => {

  const { episodes, info, onNext, onPrevious, charactersEpisode } = useFetchEpisodes();


  return (
    <div>
      <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}/>


        <div className={styles.episodes_container}>
          { episodes.length === 0 && <p>Carregando...</p>}
          { episodes.length > 0 && episodes.map((episode) => 
          <EpisodesCard key={episode.id} 
          episode={episode}/>)}
          
        </div>

        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}/>
    </div>
  )
}

export default Episodes
