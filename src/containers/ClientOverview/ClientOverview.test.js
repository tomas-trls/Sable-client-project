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
  const confirmed = screen.getAllByText(/confirmed/i)[0];

  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(confirmed).toBeInTheDocument();
});


