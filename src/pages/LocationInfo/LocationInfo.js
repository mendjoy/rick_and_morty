import React from 'react'
import { useLocationDetails } from "../../hooks/useLocationDetails"

//css
import styles from "./LocationInfo.module.css"



const LocationInfo = () => {

  const { locationInfo } = useLocationDetails();

  return (

    <div className={styles.container}>
       { locationInfo && (

      <div className={styles.info_container}> 

        <h1>{locationInfo.name}</h1>

          <div className={styles.info_container}>
            <p><span>Type: </span>{locationInfo.type}</p>
            <p><span>Dimension: </span>{locationInfo.dimension}</p>
            <p><span>Residents: </span>{locationInfo.residents.length}</p>

        </div>

        </div>
       )}
    </div>
  )
}   

export default LocationInfo;