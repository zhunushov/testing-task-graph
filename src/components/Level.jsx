import { Fragment } from "react";
import { Tooltip } from "react-tooltip";

const Level = () => {
  return (
    <div className="level">
      <p className="text">Меньше</p>
      <div className="days">
        {[1, 2, 3, 4, 5].map((day) => (
          <Fragment key={day}>
            <div data-tooltip-id={day} className={`day level-${day}`} />
            <Tooltip content={getTitle(day)} id={day} />
          </Fragment>
        ))}
      </div>
      <p className="text">Больше</p>
    </div>
  );
};
export default Level;

function getTitle(level) {
  switch (level) {
    case 1:
      return "No contributions";
    case 2:
      return "1-9 contributions";
    case 3:
      return "10-19 contributions";
    case 4:
      return "20-29 contributions";
    case 5:
      return "30+ contributions";
    default:
      return "30+ contributions";
  }
}
