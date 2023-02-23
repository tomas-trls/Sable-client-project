import { render, screen } from "@testing-library/react";
import HomepageCard from "./HomepageCard";

it("should render the button component on the card", () => {
  //arrange
  render(<HomepageCard />);

  //act
  const card = screen.getByRole("button");

  // assert
  expect(card).toBeInTheDocument();
});
