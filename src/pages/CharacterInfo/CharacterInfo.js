import { Link, useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';

//css
import styles from "./CharacterInfo.module.css"

//icons 
import { BsCircleFill } from "react-icons/bs";
import { MdFemale, MdMale } from "react-icons/md";

 //pages
import LocationInfo from '../LocationInfo/LocationInfo';

const CharacterInfo = () => {

  const { characterInfo, characterOriginLocation, characterLastLocation} = useCharacter();
  
  const idLastLocation = characterLastLocation[5];
  const idOriginLocation = characterOriginLocation[5];
  
  return (

    <div className={styles.page}>
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

              { characterInfo.status === "unknown" && 
              <BsCircleFill className={styles.unknow} />} 

              { characterInfo.status === "Dead" && 
              <BsCircleFill className={styles.dead} />} {characterInfo.status}
              
              </p>

              <p><span>Specie: </span>{characterInfo.species}</p>
              <p><span>Gender: </span>
                { characterInfo.gender === "Female" && 
                <MdFemale className={styles.female}/>} 

                { characterInfo.gender === "Male" && 
                <MdMale className={styles.male}/>} {characterInfo.gender}
              
              </p>

              <p className={styles.location_link}>
                <span>First seen in: </span>

                { characterInfo.origin.name === "unknown" && <>{characterInfo.origin.name}</>}
                { characterInfo.origin.name !== "unknown" && <>
                  <Link to={`/location/${idOriginLocation}`} > 
                    {characterInfo.origin.name}
                  </Link>
                </>}
              </p> 

              <p><span>Last known location: </span>
              { characterInfo.location.name === "unknown" && <>{characterInfo.location.name}</>}
                { characterInfo.location.name !== "unknown" && <>
                  <Link to={`/location/${idLastLocation}`}> 
                    {characterInfo.location.name}
                  </Link>
                </>}
            
              </p>
              <p><span>Present in: </span>{characterInfo.episode.length} espisodes</p>
            </div>

        </div>

        </div>
       )}
    </div>
  )
}   

export default CharacterInfo