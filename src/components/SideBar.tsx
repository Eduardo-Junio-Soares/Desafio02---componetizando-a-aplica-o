import { Button } from "./Button"
import { GenreResponseProps } from "./types"
import '../styles/sidebar.scss';


interface SideBarProps {
  genreInfo: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selectedGenreID: number
}

export function SideBar(props: SideBarProps) {
  // function handleClickButton(id: number) {
  //   setSelectedGenreId(id);
  // }
  return (
    <div className="buttons-container">
    {props.genreInfo.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => props.handleClickButton(genre.id)}
        selected={props.selectedGenreID === genre.id}
      />
    ))}
  </div>
  )
}