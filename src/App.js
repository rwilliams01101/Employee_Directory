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
        <Title>Employee Directory</Title>
        <div className="text-center instructions">
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </div>
        <hr className="redDiv" />
        <table className="text-justified">
          <thead>
            <tr>
              <th>Image</th>
              <th className="name">Name</th>
              <th className="phone">Phone</th>
              <th className="email">Email</th>
              <th className="DOB">DOB</th>
            </tr>
          </thead>
        </table>
        {console.log("console: ")}
        {console.log(this.state.randomUser)}
        {this.state.randomUser.map((randomUser) => (
          <EmployeeCard
            id={randomUser.id.value}
            key={randomUser.id.value}
            title={randomUser.name.title}
            firstName={randomUser.name.first}
            lastName={randomUser.name.last}
            dob={randomUser.dob.date}
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
