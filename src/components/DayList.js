import React from "react";

import "components/DayList.scss";
import DayListItem from "./DayListItem";

// This generates the list of days and their remaining spots on the left hand side.
export default function DayList(props) {
  // iterates over the days over data to put it into DayListItem
  const dayList = props.state.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.state.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{dayList}</ul>;
}
