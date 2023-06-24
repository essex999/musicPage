import styles from './search.module.css'

function Search() {
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use href="/img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
export default Search
