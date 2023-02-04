import { Component } from "react";

class MovieForm extends Component {
    state = {
        filmName: "",
        url: "",
        ganre: "",
        views: ""
    };

    handleChangeInfo = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };

    render() {
        const { filmName, url, ganre, views } = this.state;
        return (
            // <div>MovieForm</div>
            <form>
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
            </form>

        );
}
}
export default MovieForm;