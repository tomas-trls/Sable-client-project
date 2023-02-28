import React from "react";
import "./EmployeeOverviewCard.scss";

const EmployeeOverviewCard = ({
  startDate,
  courseCompletion,
  manager,
  description,
}) => {
  return (
    <div className="employee-overview-card">
      <div className="employee-overview-card__top">
        <h3 className="employee-overview-card__top--title">
          Employee Overview
        </h3>
        <p className="employee-overview-card__top--text">{description}</p>
      </div>

      <div className="employee-overview-card__bottom">
        <div className="employee-overview-card__left">
          <p className="employee-overview-card__left--date">
            Employee Start Date:
          </p>
          <p className="employee-overview-card__left--course">
            Contract End:
          </p>
          <p className="employee-overview-card__left--manager">Manager:</p>
        </div>
        <div className="employee-overview-card__right">
          <p className="employee-overview-card__right--date">{startDate}</p>
          <p className="employee-overview-card__right--course">
            {courseCompletion}
          </p>
          <p className="employee-overview-card__right--manager">{manager}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverviewCard;
