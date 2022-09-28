import { Button } from "../components/Button";
import "../styles/sidebar.scss";

interface SideBarProps {
  genres: any[];
  genreId: number;
  fun: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.fun(genre.id)}
            selected={props.genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
