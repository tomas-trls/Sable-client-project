import { render, screen } from "@testing-library/react";
import ClientOverview from "./ClientOverview";

it("should render the filters", () => {
  render(<ClientOverview />);

  const clientListText = screen.getByRole("heading", { name: /client list/i });
  const searchBar = screen.getByRole("textbox");

  expect(clientListText).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
});

it("should render the card labels", () => {
  render(<ClientOverview />);

  const nameLabel = screen.getByText(/client name/i);
  const emailLabel = screen.getByText(/email address/i);
  const RSVPd = screen.getByText(/rsvpd/i);

  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(RSVPd).toBeInTheDocument();
});
