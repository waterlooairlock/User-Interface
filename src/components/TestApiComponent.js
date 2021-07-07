import React from "react";

class TestApiComponent extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  async getData() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log("called again");
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 1000);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} />
      </div>
    );
  }
}

export default TestApiComponent;
