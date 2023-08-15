import { Fragment, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

import { formatDate, getWeeks } from "../utils";
import { API } from "../utils/constants";

const Cells = () => {
  const weeks = getWeeks();
  const [contributions, setContributions] = useState({});

  async function getContributions() {
    try {
      const data = await (await fetch(API)).json();
      setContributions(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getContributions();
  }, []);

  return weeks.map((day) => {
    const formattedDateKey = formatDate(day, "YYYY-MM-DD");
    const contribution = contributions[formattedDateKey];

    let extraClassName = "";
    if (!contribution) {
      extraClassName = "level-1";
    } else if (contribution < 10) {
      extraClassName = "level-2";
    } else if (contribution < 20) {
      extraClassName = "level-3";
    } else if (contribution < 30) {
      extraClassName = "level-4";
    } else {
      extraClassName = "level-5";
    }

    return (
      <Fragment key={formattedDateKey}>
        <div
          data-tooltip-id={formattedDateKey}
          className={`day ${extraClassName}`}
        />
        <Tooltip
          openOnClick
          content={
            <Fragment>
              <p className="tooltip-text">
                {contribution ? contribution : "No"} contributions
              </p>
              <p className="tooltip-helper-text">
                {formatDate(day, "dddd, MMMM DD, YYYY")}
              </p>
            </Fragment>
          }
          id={formattedDateKey}
        />
      </Fragment>
    );
  });
};

export default Cells;
