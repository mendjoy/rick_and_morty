import React from 'react'
import CharacterCard from '../components/CharacterCard';
import { useCharacter } from '../hooks/useCharacter'


const CharacterInfo = () => {

  const { characterInfo } = useCharacter();

  return (

    <div>
       { characterInfo && (
        <>
          <CharacterCard character={characterInfo}/>
          <p><span>Status: </span>{characterInfo.status}</p>
          <p><span>Specie: </span>{characterInfo.species}</p>
          <p><span>Gender: </span>{characterInfo.gender}</p>
          <p><span>Origin: </span>{characterInfo.origin.name}</p> 
          <p><span>Location: </span>{characterInfo.location.name}</p>
        </>
       )}
    </div>
  )
}

export default CharacterInfo