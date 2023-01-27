import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

 export const useLocationDetails = () => {

    const { id } = useParams();

    const [ locationInfo, setLocationInfo] = useState(null);

    const url = "https://rickandmortyapi.com/api/location";

    const dataLocation = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setLocationInfo(data))
            .catch(err => console.log(err))
    };

    useEffect(() => {

        dataLocation(`${url}/${id}`);
        
    },[id])

   return { locationInfo }
  
}
