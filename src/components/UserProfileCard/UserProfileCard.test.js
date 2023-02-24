import { render, screen } from "@testing-library/react";
import UserProfileCard from "./UserProfileCard";

it("should render client card on the page", () => {
  //arrange
  render(<UserProfileCard name="name" />);

  //act
  const card = screen.getByText("name", { name: /name/i });

  // assert
  expect(card).toBeInTheDocument();
});
