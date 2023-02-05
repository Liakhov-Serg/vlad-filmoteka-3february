import { Component } from "react";
import PropTypes from "prop-types";
import MovieForm from "../MovieForm/MovieForm";
import FilmList from "../FilmList/FilmList";
import GenresSelect from "../GenresSelect/GenresSelect";
import { genres } from "../../constants/genres";


class Filmoteka extends Component {

    state = {
        filmList: [],
        genre: "All",
    };

    handleChangeGerne = (event) => {
        const { value } = event.target;
        this.setState({ genre: value });

    };

    handleDeleteFilm = (id) => {
        this.setState((prevState) => ({
            filmList: prevState.filmList.
                filter((item) => item.id !== id),
        }));
    };

    handleAddFilm = (newFilm) => {
        if (
            this.state.filmList.some(
                (film) => film.filmName.toLowerCase().trim() ===
                    newFilm.filmName.toLowerCase().trim()
            )
        ) {
            return alert(`${newFilm.filmName} alredy exists`);
        } 
        this.setState(prevState => ({
            filmList: [...prevState.filmList, newFilm]
        }));
}

    render() {
    const {filmList} = this.state

return (
    <div>
        <h2>Filmoteka</h2>
        <MovieForm onAddFilm={this.handleAddFilm} />
        <GenresSelect
            onChange={this.handleChangeGerne}
            genre={this.state.genre}
            list={genres}
        />
        <FilmList filmList={filmList} onDeleteFilm = {this.handleDeleteFilm} />
    </div>
);
}
}

Filmoteka.propTypes = {}

export default Filmoteka