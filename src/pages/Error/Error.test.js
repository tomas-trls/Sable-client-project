import { render, screen } from "@testing-library/react";
import Error from "./Error";
import { MemoryRouter as Router } from "react-router-dom";

it("shoud render the error page", () => {
  render(
    <Router>
      <Error page={"page"} />
    </Router>
  );

  const title = screen.getByRole("heading", {
    name: /error - 401/i,
  });

  expect(title).toBeInTheDocument();
});

it("should render the correct error message", () => {
  render(
    <Router>
      <Error page={"staff"} />
    </Router>
  );

  const errorMessage = screen.getByText(
    /you have tried to access staff page without logging in, to continue:/i
  );

  const errorMessageFalse = screen.queryByText(
    /you have tried to access resource page without logging in, to continue:/i
  );

  expect(errorMessage).toBeInTheDocument();
  expect(errorMessageFalse).not.toBeInTheDocument();
});
