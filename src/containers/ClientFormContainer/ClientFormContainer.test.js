import { render, screen } from "@testing-library/react";
import ClientFormContainer from "./ClientFormContainer";

it("should render the delete user link on the edit client page", () => {
    render(<ClientFormContainer isEditClient={true}/>)

    const deleteUser = screen.getByRole('heading', {name: /delete user/i})

    expect(deleteUser).toBeInTheDocument(); 

})

it("should render user information inside the input boxes in the edit client page", () => {
    render(<ClientFormContainer isEditClient={true}/>)

    const inputBox = screen.getByRole('textbox', {
        name: /first name/i
      })

    const name = screen.getByDisplayValue(/louis/i)

    expect(inputBox).toBeInTheDocument(name); 

})
