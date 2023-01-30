import { useState, useEffect } from "react"

 export const useFetchLocations = () => {

    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState({});

    const url = "https://rickandmortyapi.com/api/location";

    const fetchAllLocations = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                
                setLocations(data.results);
                setInfo(data.info)
            })
            .catch(err => console.log(err))
    };

    const onPrevious = () => {
        fetchAllLocations(info.prev)
       }
    
       const onNext = () => {
        fetchAllLocations(info.next)
       }
    

    useEffect(() => {
        fetchAllLocations(url);
        
    },[])

   return { locations, info, onPrevious, onNext }
  
}

