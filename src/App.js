import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import randomUser from "./randomUser.json";

class App extends Component {
  // Setting this.state.randomUser to the randomUser json array
  state = {
    randomUser,
  };

  removeEmploye = (id) => {
    // Filter this.state.randomUser for randomUser with an id not equal to the id being removed
    const randomUser = this.state.randomUser.filter(
      (randomUser) => randomUser.id !== id
    );
    // Set this.state.randomUser equal to the new randomUser array
    this.setState({ randomUser });
  };

  // Map over this.state.randomUser and render a EmployeeCard component for each randomUser object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.randomUser.map((randomUser) => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={randomUser.id}
            key={randomUser.id}
            name={randomUser.name}
            image={randomUser.image}
            occupation={randomUser.occupation}
            location={randomUser.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
