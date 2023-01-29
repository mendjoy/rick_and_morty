import React from 'react';
import { useFetch } from '../../hooks/useFetch';

//css
import styles from "./Pagination.module.css";

const Pagination = ({prev, next, onNext, onPrevious}) => {

    const handlePrevious = () => {
        onPrevious();
    };

    const handleNext = () => {
        onNext();

    };

   

  return (
    <div>
        <ul className={styles.pagination}>

              { prev  ?   (
                    <li className={styles.button_container}>
                        <button onClick={handlePrevious}>Prev</button>
                    </li>
                ) : null }
           
            <li className={styles.button}>
                {}

            </li>

            { next ? (
                <li className={styles.button_container}>
                    <button onClick={handleNext}>Next</button>
                </li>

            ) : null}
            
        </ul>
    </div>
  )
}

export default Pagination