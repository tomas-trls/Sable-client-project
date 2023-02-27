import { render, screen } from "@testing-library/react";
import ResourcesOverview from "./ResourcesOverview";

it("should render health products and filters when isAdmin is false", () => {
    render(<ResourcesOverview isAdmin={false}/>)

    const healthProductText = screen.getByRole('heading', {
        name: /health products/i
      })

    const sortText = screen.getByText(/sort/i);
    const gridImage = screen.getByRole('img', {
        name: /grid view icon/i
      })
    expect(healthProductText).toBeInTheDocument(); 
    expect(gridImage).toBeInTheDocument(); 
    expect(sortText).toBeInTheDocument(); 
})

it("should render admin and no filters when isAdmin is true", () => {
    render(<ResourcesOverview isAdmin={true}/>);

    const adminText = screen.getByRole('heading', {
        name: /admin/i
    })
    const sortText = screen.queryByText(/sort/i);
    const gridImage = screen.queryByRole('img', {
        name: /grid view icon/i
      })
    expect(adminText).toBeInTheDocument(); 
    expect(gridImage).not.toBeInTheDocument(); 
    expect(sortText).not.toBeInTheDocument(); 
})