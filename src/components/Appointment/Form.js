import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import "./styles.scss";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const resetForm = () => {
    setName("");
    setInterviewer(null);
  };

  const cancelForm = () => {
    resetForm();
    props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder={"Enter Student Name"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={(target) => {
            setInterviewer(target);
          }}
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
          <Button confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}