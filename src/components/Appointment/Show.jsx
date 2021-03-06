import React from "react";

import "./styles.scss";

// If there is an interview booked for a given appointment slot, this will display it
export default function Show(props) {
  const studentsName = props.student;
  const interviewerId = props.interviewer;
  const interviewersName = props.state.interviewers[interviewerId - 1].name;

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular">{studentsName}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">{interviewersName}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
        </section>
      </section>
    </main>
  );
}
