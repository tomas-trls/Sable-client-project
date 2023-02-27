import { render, screen } from "@testing-library/react";
import BookingDetailsCard from "./BookingDetailsCard";


//const testCardContact = {birthDate: "10/10/2000" , email:"mikolaj@gmail.com" , number: "07424020033"}
const testCardBooking = {date: "10/10/2022", time:"12:40", staff: "Rob"}

it("Should render the card heading", () => {
    render(<BookingDetailsCard cardObject={testCardBooking}/>)
    const heading = screen.getByRole('heading', {
        name: /booking details/i
      })
    expect(heading).toBeInTheDocument();
})


it("should render the props correctly in the card", () => {
    render(<BookingDetailsCard cardObject={testCardBooking}/>)
    const date = screen.getByText(/10\/10\/2022/i)
    const time = screen.getByText(/12:40/i)
    const staff = screen.getByText(/rob/i)
    expect(date).toBeInTheDocument(); 
    expect(time).toBeInTheDocument(); 
    expect(staff).toBeInTheDocument(); 
    
})