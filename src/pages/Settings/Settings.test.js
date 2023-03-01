import { render, screen } from "@testing-library/react";
import Settings from "./Settings";
import { BrowserRouter } from "react-router-dom";


it("should render the log out button on the settings page", () => {
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  
    const logOutButton = screen.getByRole('button', { name: /log out/i})
  
    expect(logOutButton).toBeInTheDocument();
});

it("should not show the nav bar on the mobile view", () => {
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );

    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query !== "(min-width: 240px) and (max-width: 767px)",
    }));
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
});

it("should render the home footer on the page in mobile view", () => {
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
  
    window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: query == "(min-width: 240px) and (max-width: 767px)",
      }));
    const homeMobile = screen.getByRole('img', {name: /home icon/i})
  
    expect(homeMobile).toBeInTheDocument();
});


