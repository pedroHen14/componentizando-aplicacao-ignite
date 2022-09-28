import "../styles/content.scss";
import { MovieCard } from "../components/MovieCard";

interface ContentProps {
  movies: any[];
  title: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
