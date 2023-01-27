
//components
import CharacterCard from "../../components/CharacterCard/CharacterCard"

//hooks
import { useFetch } from "../../hooks/useFetch";

//css
import styles from "./Home.module.css"


const Home = () => {

  const { characters } = useFetch();
  
  return (
    <div className={styles.characters_container}>
      { characters.length === 0 && <p>Carregando...</p>}
      { characters.length > 0 && characters.map((character) => 
      <CharacterCard key={character.id} 
      character={character}/>)}
      
    </div>
  )
}

export default Home