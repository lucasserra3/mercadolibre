import React from "react";

class Filtros extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Productos" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Elegiste " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filtros
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Productos">Productos</option>
            <option value="Equipos">Equipos</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Filtros;
