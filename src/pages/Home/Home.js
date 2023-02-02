
//components
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import Pagination from "../../components/Pagination/Pagination";

//hooks
import { useFetch } from "../../hooks/useFetch";

//css
import styles from "./Home.module.css"


const Home = () => {

  const { characters, info, onPrevious, onNext} = useFetch();

  return (
   
    <div>

        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}/>

        <div className={styles.characters_container}>

        
          { characters.length === 0 && <p>Carregando...</p>}
          { characters.length > 0 && characters.map((character) => 
          <CharacterCard key={character.id} 
          character={character}/>)}

        </div>

        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}/> 
  </div>
  )
}

export default Home