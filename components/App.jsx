import React, { useEffect, useState } from "react";
import styles from '../styles/App.module.css'
import Tbmd from "../pages/api/Tbmd";
import MovieRow from "./MovieRow";
import FeatureMovie from "./FeatureMovie";
import Header from "./Header";


export default function App () {

  const [movieList, setMovieList] = useState([])
  const [featureData, setfeatureData] = useState(null)
  const [blackHeader, setblackHeader] = useState(false)

  useEffect (() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tbmd.getHomeList()

      setMovieList(list)

      //PEGANDO O FEATURE
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tbmd.getMovieInfo(chosen.id, 'tv')

      setfeatureData(chosenInfo)
      

    }
    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setblackHeader(true)
      } else {
        setblackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

    
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featureData && <FeatureMovie item={featureData}/>}

      <section className={styles.lists}>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    
          <footer>
            Feito por Leonardo Felipe <br />
            Direitos de Imagens para Netflix <br />
            Este produto usa a API TMDB, mas não é endossado ou certificado por TMDB.
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="tmdb-logo.svg" alt="TBMD" />
          </footer>

          
          {movieList <= 1 &&
          
            
            <div className={styles.loader}>Loading...</div>
            
          }

    </div>
    
  )
}