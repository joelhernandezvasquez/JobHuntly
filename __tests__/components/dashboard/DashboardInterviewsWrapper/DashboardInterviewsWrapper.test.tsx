import { render } from "@testing-library/react";
import { DashboardInterviewsWrapper } from "@/components/dashboard";

describe("DashboardInterviewsWrapper", () => {
  it("should render children", () => {
    const children = <p>Test</p>;

   render(<DashboardInterviewsWrapper>{children}</DashboardInterviewsWrapper>);

    expect(children).toBeInTheDocument();
  });
});
