import { render, screen } from "@testing-library/react";
import DataCard from "./DataCard";

const studentTestObject = {
  name: "Test",
  email: "hello",
  mobileNumber: 2423789,
  isConsumer: true,
  isEmployed: false,
  courseName: "whatever",
};

const resourceTestObject = {
  resourceName: "Syringes",
  quantity: 30,
  cost: "£12.99",
  isAutoPurchase: true,
  autoPurchaseLevel: 50,
};

const bookingTestObject = {
  name: "BookingTest",
  email: "hello",
  mobileNumber: 2423789,
  bookingDate: "12/03/2023",
  bookingTime: "12:30",
  cost: "£12.99",
  courseName: "whatever",
};

it("should render the staff card with correct props", () => {
  render(<DataCard cardType="student" cardObject={studentTestObject} />);

  const nameText = screen.getByRole("heading", { name: /test/i });
  const courseName = screen.getByText(/whatever/i);
  expect(nameText).toBeInTheDocument();
  expect(courseName).toBeInTheDocument();
});

it("Should not render resourceName in a staff card", () => {
  render(<DataCard cardType="student" cardObject={studentTestObject} />);

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const nameText = screen.queryByRole("heading", { name: /test/i });
  const courseName = screen.getByText(/whatever/i);
  expect(nameText).toBeInTheDocument();
  expect(courseName).toBeInTheDocument();
  expect(syringeText).toBeNull;
  expect(syringeText).not.toBeInTheDocument();
});

it("should render a resource card with correct props", () => {
  render(<DataCard cardType="resource" cardObject={resourceTestObject} />);

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const resourcePrice = screen.getByText(/£12\.99/i);

  expect(syringeText).toBeInTheDocument();
  expect(resourcePrice).toBeInTheDocument();
});

it("should not render a mobile number in a resource data card", () => {
  render(<DataCard cardType="resource" cardObject={resourceTestObject} />);

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const resourcePrice = screen.getByText(/£12\.99/i);
  const mobileNumber = screen.queryByText(/3364587231/i);

  expect(syringeText).toBeInTheDocument;
  expect(resourcePrice).toBeInTheDocument();
  expect(mobileNumber).toBeNull();
  expect(mobileNumber).not.toBeInTheDocument();
});

it("should render a booking card", () => {
  render(<DataCard cardType="booking" cardObject={bookingTestObject} />);
  const bookingDate = screen.getByText(/12\/03\/2023/i);
  const bookingTime = screen.getByText(/12:30/i);
  expect(bookingDate).toBeInTheDocument();
  expect(bookingTime).toBeInTheDocument();
});

it("should not render additional props with a booking card", () => {
  render(<DataCard cardType="booking" cardObject={bookingTestObject} />);

  const bookingDate = screen.getByText(/12\/03\/2023/i);
  const bookingTime = screen.getByText(/12:30/i);
  const price = screen.queryByText(/£12\.99/i);
  const courseName = screen.queryByText(/whatever/i);
  expect(bookingTime).toBeInTheDocument();
  expect(bookingDate).toBeInTheDocument();
  expect(price).toBeNull();
  expect(price).not.toBeInTheDocument();
  expect(courseName).toBeNull();
  expect(courseName).not.toBeInTheDocument();
});
