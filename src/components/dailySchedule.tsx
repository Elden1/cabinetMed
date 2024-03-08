import React from "react";

import config from "../config/index.json";

const Schedule = () => {
  const { days, schedule } = config;

  const dayScheduleMap = days.map((day, index) => ({
    day,
    schedule: schedule[index],
  }));

  return (
    <div>
      {dayScheduleMap.map((pair, index) => (
        <div className={"mt-5 ml-1 text-base"} key={index}>
          <strong className={"text-lg font-medium"}>{pair.day}</strong>:{" "}
          {pair.schedule}
        </div>
      ))}
    </div>
  );
};

export default Schedule;
