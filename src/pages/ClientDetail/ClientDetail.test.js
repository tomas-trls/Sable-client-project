import { render, screen } from "@testing-library/react";
import ClientDetail from "./ClientDetail";
import { BrowserRouter } from "react-router-dom";
it("should render the page header and nav", () => {
    render(<BrowserRouter><ClientDetail/></BrowserRouter>)

    const header = screen.getByRole('heading', {
        name: /client details/i
    });
    const navbarHeaderText = screen.getByText(/clients/i)

    expect(header).toBeInTheDocument();
    expect(navbarHeaderText).toBeInTheDocument(); 
})