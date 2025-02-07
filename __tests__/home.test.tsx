import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import Page from "@/pages/index";

const { useRouter, mockedRouterPush } = vi.hoisted(() => {
  const mockedRouterPush = vi.fn();
  return {
    useRouter: () => ({ push: mockedRouterPush }),
    mockedRouterPush,
  };
});

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter,
  };
});

describe("My Home Page: ", () => {
  const setup = () => {
    const utils = render(<Page />);
    const cartButton = screen.getAllByAltText("cart");
    return {
      cartButton,
      ...utils,
    };
  };

  it("should render page", () => {
    setup();
    screen.getByText("0");
    screen.getByPlaceholderText("Search for a smartphone...");
  });

  it("should navigate to cart when clicking on cart button", () => {
    const { cartButton } = setup();

    fireEvent.click(cartButton[0]);

    expect(mockedRouterPush).toHaveBeenCalledWith("/cart");
  });
});
