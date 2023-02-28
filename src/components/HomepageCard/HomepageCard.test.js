import { render, screen } from "@testing-library/react";
import HomepageCard from "./HomepageCard";
import { MemoryRouter } from 'react-router-dom';
it("should render the button component on the card", () => {
  //arrange
  render(<HomepageCard link={"staff"} heading={"staff page"}/>, {wrapper: MemoryRouter});

  //act
  const card = screen.getByText("Go");
  // assert
  expect(card).toBeInTheDocument();
});
