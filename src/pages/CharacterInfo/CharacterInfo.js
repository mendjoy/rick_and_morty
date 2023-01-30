import { Link } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';
import { useLocationDetails } from "../../hooks/useLocationDetails";

//css
import styles from "./CharacterInfo.module.css"

//icons 
import { BsCircleFill } from "react-icons/bs";
import { MdFemale, MdMale } from "react-icons/md";

const CharacterInfo = () => {

  const { characterInfo } = useCharacter();
  const { locationInfo } = useLocationDetails();

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

              <p>
                <span>First seen in: </span>
                <Link> 
                  {characterInfo.origin.name}
                </Link>
                
              </p> 


              <p><span>Last known location: 
                </span>
                
                {characterInfo.location.name}
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