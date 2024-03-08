
import { render, screen } from "@testing-library/react";
import OpenMenuButton from "@/components/ui/ToggleDashboardMenu/OpenMenuButton";
import { useUIStore } from "@/store/index";

jest.mock("@/store");

describe("OpenMenuButton", () => {
  it("should renders menu open button", () => {
    render(<OpenMenuButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('reset_btn');
  });

  it("calls openDashboardMenu on click", () => {
    const openDashboardMenu = jest.fn();
    (useUIStore as jest.Mock).mockReturnValue({ openDashboardMenu });

    render(<OpenMenuButton />);
    const button = screen.getByRole("button");
    button.click();

    expect(openDashboardMenu).toHaveBeenCalledTimes(1);
  });
});
