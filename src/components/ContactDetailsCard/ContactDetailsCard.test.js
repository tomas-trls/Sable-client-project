import { render, screen } from "@testing-library/react";
import ContactDetailsCard from "./ContactDetailsCard";



const testCardContact = {birthDate: "10/10/2000" , email:"mikolaj@gmail.com" , number: "07424020033"}

it("Should render the card heading", () => {
    render(<ContactDetailsCard cardObject={testCardContact}/>)
    const heading = screen.getByRole('heading', {
        name: /contact details/i
      })
    expect(heading).toBeInTheDocument();
})

it("should render the props correctly in the card", () => {
    render(<ContactDetailsCard cardObject={testCardContact}/>)
    const birthDate = screen.getByText(/10\/10\/2000/i)
    const email = screen.getByText(/mikolaj@gmail.com/i)
    const number = screen.getByText(/07424020033/i)
    expect(birthDate).toBeInTheDocument(); 
    expect(email).toBeInTheDocument(); 
    expect(number).toBeInTheDocument(); 
})