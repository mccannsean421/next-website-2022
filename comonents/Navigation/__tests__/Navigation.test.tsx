import { render } from "@testing-library/react";
import Navigation from "../Navigation";

describe("Navigation", () => {
  it("Renders", () => {
    render(<Navigation />);
    console.log(document.body.innerHTML);
  });
});
