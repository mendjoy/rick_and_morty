import React from 'react'
import { Link } from 'react-router-dom'

//css 
import "./CharacterCard.css";

const CharacterCard = ({character}) => {
  return (

    <div className="character-card">
      <Link to={`/info/${character.id}`}className="character-link">
        <img src={character.image} alt="" />
        <h2>{character.name}</h2>
      </Link>
    </div>
  )
}

export default CharacterCard