/* eslint-disable react/prop-types */
import Filter from "./Filter"
import MovieList from "./MovieList"

function Home({handleFilterChange, movies}) {
  return (
    <>
        <Filter onFilterChange={handleFilterChange} />
        <MovieList movies={movies}/>
    </>
  )
}


export default Home