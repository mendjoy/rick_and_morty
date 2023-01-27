import React from 'react'
import { useCharacter } from '../../hooks/useCharacter'

//css
import styles from "./CharacterInfo.module.css"

//icons 
import { BsCircleFill } from "react-icons/bs";


const CharacterInfo = () => {

  const { characterInfo } = useCharacter();

  return (

    <div>
       { characterInfo && (
      <div className={styles.container}> 

        <h1>{characterInfo.name}</h1>

          <div className={styles.info_container}>

            <div className={styles.img_container}>
                <img src={characterInfo.image} alt={characterInfo.name} />
            </div>
              
            <div className={styles.info}>

              <p><span>Status: </span> { characterInfo.status === "Alive" && 
              <BsCircleFill className={styles.alive} />} 

              { characterInfo.status === "Dead" && 
              <BsCircleFill className={styles.dead} />} {characterInfo.status}
              
              </p>

              <p><span>Specie: </span>{characterInfo.species}</p>
              <p><span>Gender: </span>{characterInfo.gender}</p>
              <p><span>First seen in: </span>{characterInfo.origin.name}</p> 
              <p><span>Last known location: </span>{characterInfo.location.name}</p>
            </div>

        </div>

        </div>
       )}
    </div>
  )
}   

export default CharacterInfo