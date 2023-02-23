import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";


it("should render the header component on the page", () => {
  //arrange
  render(<PageHeader  headerType="headingOnly"/>);

  //act
  const header = screen.getByRole('heading');

  // assert
  expect(header).toBeInTheDocument();
});

it("should render the title text in the header component", () => {
  //arrange
  render(<PageHeader headerType="headingOnly" heading="Home"/>);

  //act
  const header = screen.getByRole("heading", {title: /home/i});

  // assert
  expect(header).toBeInTheDocument();
});
