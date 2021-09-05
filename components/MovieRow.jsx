import React, { useState } from "react"
import styles from '../styles/MovieRow.module.css'
// import { NavigateBeforeIcon, NavigateNextIcon } from '@material-ui/icons'

export default function MovieRow(props) {

    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)

        if( x > 0 ) {
            x = 0
        }

        setScrollX(x)
    }

    const handleRigttArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = props.items.results.length * 150

        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }


        setScrollX(x)
    }

    return (
        <div className={styles.movieRow}>
            <h2>{props.title}</h2>

            <div className={styles.movieRowLeft} onClick={handleLeftArrow}>
                {/* <NavigateBeforeIcon style={{fontSize: 50}}/> */}
            </div>
            <div className={styles.movieRowRight} onClick={handleRigttArrow} >
            {/* <NavigateNextIcon style={{fontSize: 50}}/> */}
            </div>

            <div className={styles.movieRowListArea}>

                <div className={styles.movieRowList} style={{
                    marginLeft: scrollX,
                    width: props.items.results.length * 150
                    
                    }}>
                    
                    {props.items.results.length > 0 && props.items.results.map((item, key) => (
                        <div key={key} className={styles.movieRowItem}>

                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
    )
}