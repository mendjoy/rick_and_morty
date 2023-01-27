import React from 'react'
import { Link } from 'react-router-dom'

//css
import  styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

        <Link to={"/"} className={styles.logo}>
          <h1>Ricky and Morty</h1>
        </Link>
        
        <div className={styles.navbar_link}>
          <Link to={"/"}>Characters</Link>
          <Link to={"/location"}>Locations</Link>
        </div>
    </nav>
  )
}

export default Navbar