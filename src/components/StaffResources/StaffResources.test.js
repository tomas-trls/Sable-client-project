import { render, screen } from "@testing-library/react";
import StaffResources from "./StaffResources";
import {resourceData} from "../../mockData.js"
let mockResourceData = [...resourceData]
it("should display the correct staff member", () => {
    render(<StaffResources staffName="Staff 01" renderLabels={true} cardsArray = {mockResourceData}/>)

    const staffMember = screen.getByRole('heading', {
        name: /staff 01/i
    })

    expect(staffMember).toBeInTheDocument();
})

it("should display the filters when renderLabels is true", () => {
    render(<StaffResources staffName="Staff 01" renderLabels={true} cardsArray = {mockResourceData}/>)

    const resourceNameLabel = screen.getByText(/resource name/i); 

    expect(resourceNameLabel).toBeInTheDocument(); 

})

it("should not display the filters when renderLabels is false", () => {
    render(<StaffResources staffName="Staff 01" renderLabels={false} cardsArray = {mockResourceData}/>)

    const resourceNameLabel = screen.queryByText(/resource name/i); 

    expect(resourceNameLabel).not.toBeInTheDocument(); 
})