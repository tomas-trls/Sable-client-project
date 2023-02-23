import { render, screen } from "@testing-library/react";
import Login from "./Login";

it("should render the login page", () => {
  render(<Login />);

  const formTitle = screen.getByRole("heading", {
    name: /welcome back/i,
  });

  expect(formTitle).toBeInTheDocument();
});

it("should render inputs", () => {
  render(<Login />);

  const emailInput = screen.getByRole("textbox", { name: /email address/i });

  const passwordInput = screen.getByLabelText(/password/i);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

// Will do E2E testing in cypress
// it("should show user on submittion of the correct username and password", async () => {
//   render(<Login />);
// });

// it("should give wrong password error when incorrect password is given", () => {
//   render(<Login />);
// });

// it("should give invalid user error when incorrect username is given", () => {
//   render(<Login />);
// });
