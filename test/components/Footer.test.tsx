import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

test("Footer test", () => {
  const { container } = render(<Footer />);

  expect(container.querySelector("footer")).toBeDefined();
  expect(container.querySelector("footer")?.textContent).toEqual(
    "© 2021 - Jamie Blaut"
  );
  expect(container).toMatchSnapshot();
});
