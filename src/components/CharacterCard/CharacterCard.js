import React from 'react'
import { Link } from 'react-router-dom'

//css 
import  styles from "./CharacterCard.module.css";

const CharacterCard = ({character}) => {

  console.log(character)
  return (

    <div className={styles.card}>
      <Link to={`/info/${character.id}`}>
        <img src={character.image} alt={character.name}/>
        <h2>{character.name}</h2>
      </Link>
    </div>
  )
}

export default CharacterCard