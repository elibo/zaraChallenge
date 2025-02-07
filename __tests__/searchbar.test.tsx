import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SearchBar } from "@/components/SearchBar";

describe("SearchBar test:", () => {
  const setup = () => {
    const utils = render(<SearchBar />);
    const input = screen.getByPlaceholderText("Search for a smartphone...");
    return {
      input,
      ...utils,
    };
  };

  afterEach(cleanup);

  it("should render component", () => {
    setup();
  });

  it("should render placeholder", () => {
    setup();
    screen.getByPlaceholderText("Search for a smartphone...");
  });

  it("should change when user searches", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "SAMS" } });
    expect(input.value).toBe("SAMS");
  });
});
