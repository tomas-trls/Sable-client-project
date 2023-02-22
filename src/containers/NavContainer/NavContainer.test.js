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

it("should not have the settings item displayed in the main item container", () => {
  render(<NavContainer />);
  render(<NavItem />);
  const itemContainer = screen.queryByRole("main");
  const settingsItem = screen.getByAltText(/settings/i);
  expect(settingsItem).not.toBe(itemContainer);
});

it("should show that their are multiple containers", () => {
  render(<NavContainer />);
  const navContainer = screen.queryByRole("navigation");
  expect(navContainer.children).toHaveLength(4);
});

it("should show the line break", () => {
  render(<NavContainer />);
  const lineBreak = screen.getByRole("img", { name: /divider line/i });
  expect(lineBreak).toBeInTheDocument();
});

it("should render the logo in its own container", () => {
  render(<NavContainer />);
  const navContainer = screen.queryByRole("navigation").firstChild;
  const logo = screen.getByAltText(/company logo/i);
  expect(navContainer.firstChild).toBe(logo);
});

it("should render the logo", () => {
  render(<NavContainer />);
  const logo = screen.getByRole("img", {
    name: /company logo/i,
  });
  expect(logo).toBeInTheDocument();
});
