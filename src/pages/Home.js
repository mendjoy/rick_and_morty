import { useState, useEffect } from "react";
//components
import CharacterCard from "../components/CharacterCard";

//hooks
import { useFetch } from "../hooks/useFetch";

//css
import "./Home.css"


const Home = () => {

  const { characters } = useFetch();
  
  return (
    <div className="characters-container">
      { characters.length === 0 && <p>Carregando...</p>}
      { characters.length > 0 && characters.map((character) => <CharacterCard key={character.id} character={character}/>)}

    </div>
  )
}

export default Home