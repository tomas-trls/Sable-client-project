import { render, screen } from "@testing-library/react";
import StaffOverview from "./StaffOverview";

it("should render the staff overview section", () => {
  render(<StaffOverview />);

  const overviewCardName = screen.getByText("Overview");

  expect(overviewCardName).toBeInTheDocument();
});

it("should render a booking component card", () => {
  render(<StaffOverview />);

  const bookingDate = screen.getByText(/12\/03\/2023/i);
  const price = screen.queryByText(/£12\.99/i);
  expect(bookingDate).toBeInTheDocument();
  expect(price).toBeNull();
  expect(price).not.toBeInTheDocument();
});

it("should render the filter options", () => {
  render(<StaffOverview />);

  const staffBookingsText = screen.getByRole("heading", {
    name: /staff bookings/i,
  });
  const filterText = screen.getByText(/filter/i);
  const sortText = screen.getByText(/sort/i);
  const gridOption = screen.getByRole("img", { name: /grid view icon/i });

  expect(staffBookingsText).toBeInTheDocument();
  expect(filterText).toBeInTheDocument();
  expect(sortText).toBeInTheDocument();
  expect(gridOption).toBeInTheDocument();
});
