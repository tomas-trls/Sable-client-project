import { render, screen } from "@testing-library/react";
import NavContainer from "./NavContainer";
import NavItem from "../../components/NavItem/NavItem";

it("should render the nav on the page", () => {
  //arrange
  render(<NavContainer />);

  //act
  const nav = screen.getByRole("navigation");

  // assert
  expect(nav).toBeInTheDocument();
});

it("should render the correct image on the page", () => {
  // arrange
  render(<NavContainer />);

  // act
  const image = screen.getByRole("img", { name: /home/i });

  // assert
  expect(image).toBeInTheDocument();
});

it("should render the correct item text on the page", () => {
  // arrange
  render(<NavContainer />);

  // act
  const text = screen.getByText(/home/i);

  //assert
  expect(text).toBeInTheDocument();
});

it("should display the corresponding image to the text", () => {
  // arrange
  render(<NavContainer />);

  // act
  const altText = screen.getByAltText(/home/i);
  const text = screen.getByText(/home/i);

  // assert
  expect(altText).toBeTruthy();
  expect(text).toBeTruthy();
});

it("should display all 5 items in the item container", () => {
  // arrange
  render(<NavContainer />);
  render(<NavItem />);

  // act
  const itemContainer = screen.queryByRole("main");

  // assert
  expect(itemContainer.children).toHaveLength(5);
});
