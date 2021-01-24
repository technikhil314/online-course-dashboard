import { render, screen, waitFor, act } from "@testing-library/react";
import Statistics from "./statistics";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get(
    "https://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard",
    (req, res, ctx) => {
      // Respond with a mocked user token that gets persisted
      // in the `sessionStorage` by the `Login` component.
      return res(
        ctx.status(200, "Mocked status"),
        ctx.json([
          {
            id: 10,
            title: "dummyStudents",
            type: "dummyProfiles",
            line1: 123,
          },
          {
            id: 20,
            title: "dummyAverage Markes",
            type: "dummyCalculation",
            line1: 9.0,
          },
          {
            id: 30,
            title: "dummyUnderperforming students",
            type: "dummyCalculation",
            line1: 9,
            line2: "dummy(14%)",
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
test("Should have dashboard statistics rendered", async () => {
  await act(async () => render(<Statistics />));
  await waitFor(() => screen.getByTestId("stats10"));
  expect(screen.getByTestId("stats10Title")).toHaveTextContent("dummyStudents");
  expect(screen.getByTestId("stats20Title")).toHaveTextContent(
    "dummyAverage Markes"
  );
  expect(screen.getByTestId("stats30Title")).toHaveTextContent(
    "dummyUnderperforming students"
  );
});
