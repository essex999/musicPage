import styles from './filter.module.css'
import { useState } from 'react'
import FilterArtist from './filterList/artist/artist'
import FilterYear from './filterList/year/year'
import FilterGenre from './filterList/genre/genre'

function Filter() {
  const [showActiveClass, setshowActiveClass] = useState(null)
  const [showArtistFilter, setShowArtistFilter] = useState(false)
  const [showYearFilter, setShowYearFilter] = useState(false)
  const [showGenreFilter, setShowGenreFilter] = useState(false)

  const handleFilterClick = (filterType) => {
    if (showActiveClass === filterType) {
      setshowActiveClass(null)
      setShowYearFilter(false)
      setShowGenreFilter(false)
      setShowArtistFilter(false)
    } else {
      setshowActiveClass(filterType)
      setShowArtistFilter(filterType === 'artist')
      setShowYearFilter(filterType === 'year')
      setShowGenreFilter(filterType === 'genre')
    }
  }

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      <div className={styles.filter_set}>
        <div
          className={`${styles.filter__button} ${styles._btn_text} ${
            showActiveClass === 'artist' ? styles.btn_active : ''
          }`}
          onClick={() => handleFilterClick('artist')}
        >
          исполнителю
        </div>
        {showArtistFilter && <FilterArtist />}
      </div>
      <div className={styles.filter_set}>
        <div
          className={`${styles.filter__button}  ${styles._btn_text} ${
            showActiveClass === 'year' ? styles.btn_active : ''
          }`}
          onClick={() => handleFilterClick('year')}
        >
          году выпуска
        </div>
        {showYearFilter && <FilterYear />}
      </div>
      <div className={styles.filter_set}>
        <div
          className={`${styles.filter__button}  ${styles._btn_text} ${
            showActiveClass === 'genre' ? styles.btn_active : ''
          }`}
          onClick={() => handleFilterClick('genre')}
        >
          жанру
        </div>
        {showGenreFilter && <FilterGenre />}
      </div>
    </div>
  )
}
export default Filter
