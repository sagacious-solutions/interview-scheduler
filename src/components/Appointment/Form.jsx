import React, { useState } from "react";
import { v4 } from "uuid";

import "./styles.scss";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

// This creates the form component there the user can create a new appointment or edit an old one
export default function Form(props) {
  const [name, setName] = useState(
    (props.appointment.interview && props.appointment.interview.student) || ""
  );
  const [interviewer, setInterviewer] = useState(
    (props.appointment.interview && props.appointment.interview.interviewer) ||
      null
  );

  const [error, setError] = useState("");

  const clearErrors = () => {
    setError("");
  };

  const resetForm = () => {
    setName("");
    setInterviewer(null);
  };

  const cancelForm = () => {
    resetForm();
    props.onCancel();
  };

  const validateAndSaveInterview = () => {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }

    if (name !== "" && interviewer === null) {
      setError("You must select an interviewer before saving.");
      return;
    }
    clearErrors();
    props.onSave(name, interviewer);
  };
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            data-testid="student-name-input"
            name="name"
            type="text"
            placeholder={"Enter Student Name"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          key={v4()}
          interviewers={props.state.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
            danger
            onClick={() => {
              cancelForm();
            }}
          >
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => {
              validateAndSaveInterview();
            }}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
