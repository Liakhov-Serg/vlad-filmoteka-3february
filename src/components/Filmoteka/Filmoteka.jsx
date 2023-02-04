import { Component } from "react";
import PropTypes from 'prop-types'
import MovieForm from "../MovieForm/MovieForm";

class Filmoteka extends Component {

    state = {
        filmList: [],
    };

    handleAddFilm = (film) => {
        this.setState(prevState => ({ filmList: [] }));
}

render() {

return (
    <div>
        Filmoteka
        <MovieForm />
    </div>
);
}
}

Filmoteka.propTypes = {}

export default Filmoteka