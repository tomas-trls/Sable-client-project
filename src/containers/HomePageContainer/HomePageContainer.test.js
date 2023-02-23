import { render, screen } from "@testing-library/react";
import HomePageContainer from "./HomePageContainer";
import HomepageCard from "../../components/HomepageCard/HomepageCard";
import NavContainer from "../NavContainer/NavContainer";
import { BrowserRouter } from "react-router-dom";

it("should render the cards on the page", () => {
  // arrange
  render(<HomePageContainer />);
  render(<HomepageCard />);

  // act
  const card = screen.getByRole("heading", {
    name: /client details/i,
  });

  // assert
  expect(card).toBeInTheDocument();
});

it("should show the login button on the mobile view", () => {
  // arrange
  render(<HomePageContainer />);
  render(<HomepageCard />);

  //act
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query == "(min-width: 240px) and (max-width: 767px)",
  }));
  const button = screen.getByRole("button", { name: /log out/i });

  //assert
  expect(button).toBeInTheDocument();
});

it("should not show the nav bar on the mobile view", () => {
  // arrange
  render(
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  );

  //act
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query !== "(min-width: 240px) and (max-width: 767px)",
  }));
  const nav = screen.getByRole("navigation");

  //assert
  expect(nav).toBeInTheDocument();
});
