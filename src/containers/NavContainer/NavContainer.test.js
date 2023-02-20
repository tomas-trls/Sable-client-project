import { render, screen } from "@testing-library/react";
import NavContainer from "./NavContainer";

it("should render the nav on the page", () => {

    //arrange
    render(<NavContainer/>)

    //act
    const nav = screen.getByRole('navigation')

    // assert
    expect(nav).toBeInTheDocument();
})