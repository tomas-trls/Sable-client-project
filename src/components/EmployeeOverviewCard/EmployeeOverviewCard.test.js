import { render, screen } from "@testing-library/react";
import EmployeeOverviewCard from "./EmployeeOverviewCard";

it("should render the title on the top of the overview card", () => {
    //arrange
    render(<EmployeeOverviewCard/>);
  
    //act
    const title = screen.getByText("Employee Overview");
  
    // assert
    expect(title).toBeInTheDocument();
});
