import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import MyButton from "@/components/MyButton";

const { useRouter, mockedRouterPush } = vi.hoisted(() => {
  const mockedRouterPush = vi.fn();
  return {
    useRouter: () => ({ push: mockedRouterPush }),
    mockedRouterPush,
  };
});

vi.mock("next/router", async () => {
  const actual = await vi.importActual("next/router");
  return {
    ...actual,
    useRouter,
  };
});

describe("My Button component: ", () => {
  it("should render component", () => {
    render(<MyButton bgColor="white" text="Test" textColor="black" />);
  });
});
