import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import Specifications from "../components/Specifications";

describe("Specifications test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    render(<Specifications />);
  });

  it("should render title", () => {
    render(<Specifications />);
    screen.getByText("SPECIFICATIONS");
  });
});
