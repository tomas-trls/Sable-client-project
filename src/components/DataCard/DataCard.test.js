import { render, screen } from "@testing-library/react";
import DataCard from "./DataCard";

const studentTestObject = {
  name: "Mariah Chan",
  email: "mariahchan@gmail.com",
  mobile: "+441234567891",
  query: "consumer",
  rsvp: true,
  staff: "Mariana",
};

const resourceTestObject = {
  resourceName: "Syringes",
  quantity: 580,
  cost: "£25.99",
  isAutoPurchase: true,
  autoPurchaseLevel: 300,
};

const bookingTestObject = {
  name: "Rachel Kim",
  email: "rachelkim@gmail.com",
  mobile: "+441234567898",
  bookingDate: "16/01/2023",
  bookingTime: "12:00",
  cost: "£20",
};

it("should render the staff card with correct props", () => {
  render(<DataCard cardType="student" cardObject={studentTestObject} />);

  const nameText = screen.getByRole("heading", { name: /Mariah Chan/i });
  const courseName = screen.getByText(/Mariana/i);
  expect(nameText).toBeInTheDocument();
  expect(courseName).toBeInTheDocument();
});

it("Should not render resourceName in a staff card", () => {
  render(<DataCard cardType="student" cardObject={studentTestObject} />);

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const nameText = screen.queryByRole("heading", { name: /Mariah Chan/i });
  const courseName = screen.getByText(/Mariana/i);
  expect(nameText).toBeInTheDocument();
  expect(courseName).toBeInTheDocument();
  expect(syringeText).toBeNull;
  expect(syringeText).not.toBeInTheDocument();
});

it("should render a resource card with correct props", () => {
  render(<DataCard cardType="resource" cardObject={resourceTestObject} />);

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const resourcePrice = screen.getByText(/£25\.99/i);

  expect(syringeText).toBeInTheDocument();
  expect(resourcePrice).toBeInTheDocument();
});

it("should not render a mobile number in a resource data card", () => {
  render(<DataCard cardType="resource" cardObject={resourceTestObject} />);

  const syringeText = screen.queryByRole("heading", { name: /syringes/i });
  const resourcePrice = screen.getByText(/£25\.99/i);
  const mobileNumber = screen.queryByText(/3364587231/i);

  expect(syringeText).toBeInTheDocument;
  expect(resourcePrice).toBeInTheDocument();
  expect(mobileNumber).toBeNull();
  expect(mobileNumber).not.toBeInTheDocument();
});

it("should render a booking card", () => {
  render(<DataCard cardType="booking" cardObject={bookingTestObject} />);
  const bookingDate = screen.getByText(/16\/01\/2023/i);
  const bookingTime = screen.getByText(/12:00/i);
  expect(bookingDate).toBeInTheDocument();
  expect(bookingTime).toBeInTheDocument();
});

it("should not render additional props with a booking card", () => {
  render(<DataCard cardType="booking" cardObject={bookingTestObject} />);

  const bookingDate = screen.getByText(/16\/01\/2023/i);
  const bookingTime = screen.getByText(/12:00/i);
  const price = screen.queryByText(/£20/i);
  const courseName = screen.queryByText(/whatever/i);
  expect(bookingTime).toBeInTheDocument();
  expect(bookingDate).toBeInTheDocument();
  expect(price).toBeNull();
  expect(price).not.toBeInTheDocument();
  expect(courseName).toBeNull();
  expect(courseName).not.toBeInTheDocument();
});
