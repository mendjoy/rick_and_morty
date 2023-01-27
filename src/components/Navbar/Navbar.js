import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

//css
import  styles from "./Navbar.module.css";

//icons
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {

  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    navigate(`/search?q=${search}`)

    setSearch("");

  }
  
  return (

    <div className={styles.navbar_container}>
        <nav className={styles.navbar}>

            <Link to={"/"} className={styles.logo}>
              <h1>Ricky and Morty</h1>
            </Link>

            <form onSubmit={handleSubmit} className={styles.form}>

              <input type="text" 
              placeholder="Search a character" 
              className={styles.input_text} 
              onChange={(e) => setSearch(e.target.value)}
              value={search}/>

            <button type="submit" className={styles.btn}>
                <BiSearchAlt2/>
            </button>
            </form> 
        </nav>
    <div className={styles.navbar_links}>
        <Link to="/">Characters</Link>
        <Link to="/location">Locations</Link>
    </div>
  </div>
  )
}

export default Navbar