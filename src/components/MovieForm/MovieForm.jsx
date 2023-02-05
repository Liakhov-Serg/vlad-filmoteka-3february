import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

const INITIAL_STATE = {
    filmName: "",
    url: "",
    ganre: "",
    views: "",
};

class MovieForm extends Component {
    state = {
        ...INITIAL_STATE,
    };

    handleChangeInfo = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };

    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.onAddFilm({...this.state, id: nanoid() });
        this.setState(INITIAL_STATE);
    };
    render() {
        const { filmName, url, ganre, views } = this.state;
        return (
            // <div>MovieForm</div>
            <form onSubmit={this.handleSubmitForm}>
                <input
                    name="filmName"
                    value={filmName}
                    onChange={this.handleChangeInfo}
                    type="text"
                    placeholder="Film name"
                    required
                    minLength={3} />
                <input
                    name="url"
                    value={url}
                    onChange={this.handleChangeInfo}
                    type="text"
                    placeholder="Avatar URL"
                    required
                    minLength={10} />
                <select name="ganre"
                    value={ganre}
                    onChange={this.handleChangeInfo}>
                    <option value="" disabled>
                        CHoose ganre
                    </option>
                    <option value="horror">horror</option>
                    <option value="comedy">comedy</option>
                    <option value="drama">drama</option>
                    <option value="fantasy">fantasy</option>
                </select>
                <input
                    name="views"
                    value={views}
                    onChange={this.handleChangeInfo}
                    placeholder="views"
                    required
                    type="number" />
                <button
                    className="btn btn-primery"
                    type="submit">
                    ADD FILM
                </button>
            </form>

        );
}
}
MovieForm.propTypes = {
    onAddFilm: PropTypes.func.isRequired
};

export default MovieForm;