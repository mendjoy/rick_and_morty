import React from 'react'
import { Link } from 'react-router-dom'

//css 
import  styles from "./EpisodesCard.module.css";

const EpisodesCard = ({episode}) => {

  return (

    <div className={styles.card}>
      <Link to={`/episodes/${episode.id}`}>
        <h2>{episode.name}</h2>
        <p>{episode.episode}</p>
      </Link>
    </div>
  )
}

export default EpisodesCard