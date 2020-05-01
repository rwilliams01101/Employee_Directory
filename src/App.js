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

  // Map over this.state.randomUser and render a EmployeeCard component for each randomUser object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {console.log("console: ")}
        {console.log(this.state.randomUser)}
        {this.state.randomUser.map((randomUser) => (
          <EmployeeCard
            id={randomUser.id.value}
            key={randomUser.phone}
            title={randomUser.name.title}
            firstName={randomUser.name.first}
            lastName={randomUser.name.last}
            // streetNumber={randomUser.location.street.number}
            // streetName={randomUser.location.street.name}
            // city={randomUser.location.city}
            // state={randomUser.location.state}
            phone={randomUser.phone}
            email={randomUser.email}
            picture={randomUser.picture.large}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
