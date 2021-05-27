import { render } from "@testing-library/react";
import Footer from "./footer";

test("example", () => {
  const { container } = render(<Footer />);

  expect(container.getElementById("footer")).toBeDefined();
  expect(container).toMatchSnapshot();
});
