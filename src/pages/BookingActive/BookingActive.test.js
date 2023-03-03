import { render, screen } from "@testing-library/react";
import BookingActive from "./BookingActive";
import { BrowserRouter } from "react-router-dom";

it("should render the page header", () => {
  render(
    <BrowserRouter>
      <BookingActive />
    </BrowserRouter>
  );

  const headerButton = screen.getByRole("button", {
    name: /edit/i,
  });

  expect(headerButton).toBeInTheDocument();
});