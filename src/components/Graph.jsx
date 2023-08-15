import { getMonths } from "../utils";
import Cells from "./Cells";
import Level from "./Level";

const ContributionGraph = () => {
  const months = getMonths();

  return (
    <div className="table">
      <div className="table__head">
        {months.map((month) => (
          <p className="capitalize" key={month}>
            {month}
          </p>
        ))}
      </div>

      <div className="table__body">
        {["Пн", "", "Cр", "", "Пт", "", ""].map((day) => (
          <p key={day}>{day}</p>
        ))}
        <Cells />
      </div>
      <Level />
    </div>
  );
};

export default ContributionGraph;
