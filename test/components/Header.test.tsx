import { render } from "@testing-library/react";
import Header from "../../components/Header";

test("Header test", () => {
  const { container } = render(<Header />);
  expect(container).toBeDefined();
  expect(container).toMatchSnapshot();
});
