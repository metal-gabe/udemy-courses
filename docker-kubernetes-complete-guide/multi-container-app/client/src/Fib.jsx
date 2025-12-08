import axios from "axios";
import { Component } from "react";

class Fib extends Component {
  state = {
    index: "",
    seenIndexes: [],
    values: {},
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  handleChange = (event) => {
    this.setState({ index: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index,
    });

    this.setState({ index: "" });
    this.fetchValues();
    this.fetchIndexes();
  };

  renderSeenIndices = () => {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  };

  renderValues = () => {
    const entries = Object.entries(this.state.values);

    return entries.map(([key, value]) => (
      <div key={key}>
        For index {key} I calculated {value}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input value={this.state.index} onChange={this.handleChange} />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndices()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
