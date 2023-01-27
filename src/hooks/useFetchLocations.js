import { useState, useEffect } from "react"

 export const useFetchLocations = () => {

    const [locations, setLocations] = useState([]);

    const url = "https://rickandmortyapi.com/api/location";

    const fetchAllLocations = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setLocations(data.results))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchAllLocations(url);
        
    },[])

   return { locations }
  
}

