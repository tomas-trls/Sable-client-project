import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SettingsCard from "./SettingsCard";

it("should render the apply button on the settings card on the page", () => {
  render(
    <BrowserRouter>
      <SettingsCard />
    </BrowserRouter>
  );
  const applyButton = screen.getByRole("button", { name: /apply/i });
  expect(applyButton).toBeInTheDocument();
});

it("the radio button should be selected when clicked", () => {
  render(
    <BrowserRouter>
      <SettingsCard />
    </BrowserRouter>
  );
  userEvent.click(screen.getByRole("radio", { name: /tech/i }));
});

it("the toggle button should slide when clicked", () => {
  render(
    <BrowserRouter>
      <SettingsCard />
    </BrowserRouter>
  );
  const toggle = screen.getByRole("checkbox");
  userEvent.click(toggle);
  expect(toggle.classList.contains("checked"));
});
