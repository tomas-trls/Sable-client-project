import { render, screen } from "@testing-library/react";
import "jest-canvas-mock";
import BookingOverview from "./BookingOverview";

it("should render the user booking container overview", () => {
  render(<BookingOverview />);

  const monday = screen.getByText(/mon/i);
  const wednesday = screen.getByText(/wed/i);
  const friday = screen.getByText(/fri/i);

  expect(monday).toBeInTheDocument();
  expect(wednesday).toBeInTheDocument();
  expect(friday).toBeInTheDocument();
});

it("should render days of the month", () => {
  render(<BookingOverview />);

  const firstDay = screen.getByRole("button", { name: /march 2, 2023/i });
  const lastDay = screen.getByRole("button", { name: /february 28, 2023/i });

  expect(firstDay).toBeInTheDocument();
  expect(lastDay).toBeInTheDocument();
});

it("should not render a day that is not in the current month", () => {
  render(<BookingOverview />);

  const testDay = screen.queryByRole("button", { name: /march 2, 2025/i });

  expect(testDay).not.toBeInTheDocument();
});

it("Should render year and month", () => {
  const { container } = render(<BookingOverview />);

  const navigationLabel = container.getElementsByClassName(
    "react-calendar__navigation__label"
  );

  expect(navigationLabel[0]).toBeInTheDocument();
});

it("should render the calendar", () => {
  const { container } = render(<BookingOverview />);

  const calendar = container.getElementsByClassName(
    "input-field-container__calendar"
  );
  expect(calendar[0]).toBeInTheDocument();
});

it("should render the submit buttons", () => {
  render(<BookingOverview />);

  const saveBtn = screen.getByRole("button", { name: /save/i });

  expect(saveBtn).toBeInTheDocument();
});

it("should render the inputs", () => {
  render(<BookingOverview />);

  const emailInput = screen.getByRole("textbox", { name: /email address/i });
  const mobileNumberInput = screen.getByRole("textbox", { name: /mobile number/i });

  expect(emailInput).toBeInTheDocument();
  expect(mobileNumberInput).toBeInTheDocument();
});
