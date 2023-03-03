import { render, screen } from "@testing-library/react";
import ActiveClientOverview from "./ActiveClientOverview";
import { BrowserRouter } from "react-router-dom";

it("should render user profile, booking, and contact details cards", () => {
  render(
    <BrowserRouter>
      <ActiveClientOverview isClientDetails = {false} />
    </BrowserRouter>
  );

  const profileImage = screen.getByRole('img', {
    name: /user-image/i
  })

  const contactDetailsCard = screen.getByRole('heading', {
    name: /contact details/i
  })

  const bookingDetailsCard = screen.getByRole('heading', {
    name: /date:/i
  })
  
  expect(profileImage).toBeInTheDocument();
  expect(contactDetailsCard).toBeInTheDocument();
  expect(bookingDetailsCard).toBeInTheDocument();
});