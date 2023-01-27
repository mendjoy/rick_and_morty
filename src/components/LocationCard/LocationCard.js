import React from 'react'
import { Link } from 'react-router-dom'

//css 
import  styles from "./LocationCard.module.css";

const LocationCard = ({location}) => {

  return (

    <div className={styles.card}>
      <Link to={`/location/${location.id}`}>
        <h2>{location.name}</h2>
      </Link>
      <p> <span>Residents: </span>{location.residents.length}</p>
    </div>
  )
}

export default LocationCard