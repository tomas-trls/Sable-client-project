import { render, screen } from "@testing-library/react";
import EditResource from "./EditResource";
import { BrowserRouter } from "react-router-dom";

it("should render the checkboxes on the page", ()=>{
    render(<BrowserRouter><EditResource/></BrowserRouter>)
    const checkBoxYes = screen.getByRole('checkbox', {
        name: /yes/i,
        })
    const checkBoxNo = screen.getByRole('checkbox', {
        name: /no/i,
        })
    expect(checkBoxYes).toBeInTheDocument();  
    expect(checkBoxNo).toBeInTheDocument();  

})

it("should render all the input fields", ()=>{
    render(<BrowserRouter><EditResource/></BrowserRouter>)
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes).toHaveLength(5); 
})

it("should render the form headings", ()=>{
    render(<BrowserRouter><EditResource/></BrowserRouter>)
    const purchaseLevel = screen.getByText(/auto-purchase level/i)
    const quantRemaining = screen.getByText(/quantity remaining/i)
    const categoryName = screen.getByText(/category name/i)
    const staffMember = screen.getByText(/staff member/i)
    const resourceName = screen.getByText(/resource name/i)
    expect(purchaseLevel).toBeInTheDocument();
    expect(quantRemaining).toBeInTheDocument();
    expect(categoryName).toBeInTheDocument();
    expect(staffMember).toBeInTheDocument();
    expect(resourceName).toBeInTheDocument();
})