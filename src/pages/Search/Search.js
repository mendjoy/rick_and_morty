import React from 'react'
import { useSearch } from '../../hooks/useSearch'

//components
import CharacterCard from "../../components/CharacterCard/CharacterCard"

//css
import styles from "./Search.module.css";
import stylesHome from ".././Home/Home.module.css"


const Search = () => {

  const { searchCharacter, query } = useSearch();

  console.log(searchCharacter)
  console.log()

  return (
    <div className={styles.search_container}>
      <h2 className={styles.title}>Results for: <span>{query}</span></h2>  
      <p className={styles.p}>Has been found: {searchCharacter.length} result(s)</p>

      <div className={stylesHome.characters_container}> 

        {searchCharacter.length > 0 && searchCharacter.map((chara) => 
          <div className={styles.character}>
            <CharacterCard key={chara} character={chara}/>
        </div> ) }

       
      </div>
     


    </div>
  )
}

export default Search