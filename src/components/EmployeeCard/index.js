import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="container">
      <tr id={props.id} className="text-center">
        <td>
          <img alt={props.name} src={props.picture} id="headshot" />
        </td>
        <td className="employeeName">
          {props.title} {props.firstName} {props.lastName}
        </td>
        <td className="employeePhone">{props.phone}</td>
        <td className="employeeEmail">{props.email}</td>
        <td className="employeeDOB">{props.dob}</td>
      </tr>
    </div>
  );
}

export default EmployeeCard;
