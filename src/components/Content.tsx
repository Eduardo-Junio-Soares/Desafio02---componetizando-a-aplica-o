import { MovieCard } from "./MovieCard"
import { GenreResponseProps, MovieProps } from "./types"
import '../styles/content.scss';

interface ContentProps {
  movieInfo: MovieProps[]
  selectedGenre: GenreResponseProps
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
        {props.movieInfo.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
        </div>
      </main>
  </div>
  )
}