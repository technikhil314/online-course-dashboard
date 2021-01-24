import { fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

test("Should have default value displayed on dropdown button", () => {
  const fakeOptions = [
    {
      name: "demo1",
      value: "demo1",
    },
    {
      name: "demo2",
      value: "demo2",
    },
  ];
  const defaultValue = "demo1";
  render(
    <Dropdown
      options={fakeOptions}
      onChange={jest.fn()}
      defaultValue={defaultValue}
    />
  );
  expect(screen.getByTestId("dropdownButton").textContent).toEqual("demo1");
});

test("Should not have active class on dropdown", () => {
  const fakeOptions = [
    {
      name: "demo1",
      value: "demo1",
    },
    {
      name: "demo2",
      value: "demo2",
    },
  ];
  const defaultValue = "demo1";
  render(
    <Dropdown
      options={fakeOptions}
      onChange={jest.fn()}
      defaultValue={defaultValue}
    />
  );
  expect(screen.getByTestId("dropdown").classList.contains("active")).toEqual(
    false
  );
});

test("Should have active class on dropdown when clicked on the button", () => {
  const fakeOptions = [
    {
      name: "demo1",
      value: "demo1",
    },
    {
      name: "demo2",
      value: "demo2",
    },
  ];
  const defaultValue = "demo1";
  render(
    <Dropdown
      options={fakeOptions}
      onChange={jest.fn()}
      defaultValue={defaultValue}
    />
  );
  fireEvent.click(screen.getByTestId("dropdownButton"));
  expect(screen.getByTestId("dropdown").classList.contains("active")).toEqual(
    true
  );
});

test("Should change selected value when clicked on dropdown option", () => {
  const fakeOptions = [
    {
      name: "demo1",
      value: "demo1",
    },
    {
      name: "demo2",
      value: "demo2",
    },
  ];
  const defaultValue = "demo1";
  render(
    <Dropdown
      options={fakeOptions}
      onChange={jest.fn()}
      defaultValue={defaultValue}
    />
  );
  fireEvent.click(screen.getByTestId("dropdownButton"));
  fireEvent.click(screen.getByTestId("optiondemo2"));
  expect(screen.getByTestId("dropdownButton").textContent).toEqual("demo2");
});

test("Should call the callback value when clicked on dropdown option", () => {
  const fakeOptions = [
    {
      name: "demo1",
      value: "demo1",
    },
    {
      name: "demo2",
      value: "demo2",
    },
  ];
  const defaultValue = "demo1";
  const mockOnChange = jest.fn();
  render(
    <Dropdown
      options={fakeOptions}
      onChange={mockOnChange}
      defaultValue={defaultValue}
    />
  );
  fireEvent.click(screen.getByTestId("dropdownButton"));
  fireEvent.click(screen.getByTestId("optiondemo2"));
  expect(mockOnChange).toHaveBeenCalledTimes(1);
});
