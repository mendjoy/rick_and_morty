//components
import LocationCard from "../../components/LocationCard/LocationCard";
import Pagination from "../../components/Pagination/Pagination";

//hooks
import { useFetchLocations } from "../../hooks/useFetchLocations";

//css
import styles from "./Location.module.css"


const Location = () => {

  const { locations, info, onPrevious, onNext } = useFetchLocations();

  
  return (

    <div>
      <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}/>
       

      <div className={styles.locations_container}>
        { locations.length === 0 && <p>Carregando...</p>}
        { locations.length > 0 && locations.map((location) => 
        <LocationCard key={location.id} 
        location={location}/>)}
      </div>

        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}/>
         
    </div>
  )
}

export default Location