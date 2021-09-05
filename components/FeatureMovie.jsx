import React from "react";
import styles from '../styles/FeatureMovie.module.css'

export default function FeatureMovie(props) {
    
    let firstDate = new Date(props.item.first_air_date)
    let genres = []

    for (let i in props.item.genres) {
        genres.push(props.item.genres[i].name)
    }

    let description = props.item.overview
    if(description.length > 200) {
        description = description.substring(0, 200) + '...'
    }
    
    return (
        <section className={styles.feature} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`
        }}>
            <div className={styles.featureVertical}>
                <div className={styles.featureHorizontal}>
                    <div className={styles.featureName}>{props.item.original_name}</div>
                    <div className={styles.featureInfo}>
                        <div className={styles.featurePoints}> {props.item.vote_average} Pontos </div>
                        <div className={styles.featureYear}> {firstDate.getFullYear()} </div>
                        <div className={styles.featureSeasons}>{props.item.number_of_seasons} Temporada{props.item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className={styles.featureDescription}>{description}</div>
                        <div className={styles.featureButtons}>
                            <a href={`/watch/${props.item.id}`} className={styles.featureWhatchButton}>Assistir</a>
                            <a href={`/list/add/${props.item.id}`} className={styles.featureMyListButton}>+ Minha Lista</a>
                        </div>
                        <div className={styles.featureGenres}><strong>Generos: {genres.join(', ')}</strong></div>
                    </div>
                </div>
            </div>
        </section>
    )
}