import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("find compound interest of user input numbers", () => {
  expect(
    Compint((Val = 100), (Duration = 1), (Int = 7), (Invest = 0)).toBe(107)
  );
});
