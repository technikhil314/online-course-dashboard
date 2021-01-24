import { render, screen } from "@testing-library/react";
import App from "./app";

test("snapshot should match", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
