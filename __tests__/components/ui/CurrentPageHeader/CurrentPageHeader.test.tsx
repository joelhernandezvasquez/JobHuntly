import { render, screen,renderHook } from "@testing-library/react";
import CurrentPageHeader from "@/components/ui/CurrentPageHeader/CurrentPageHeader";
import useAuthNav from "@/hooks/useAuthNav";

// jest.mock("@/hooks/useAuthNav");

describe("CurrentPageHeader", () => {

    it("should render h1 tag with the current page path", () => {
       renderHook(()=> useAuthNav());
       render(<CurrentPageHeader/>);
     
       const headline = screen.getByRole('heading',{level:1});
       expect(headline).toBeInTheDocument();
      });


//   it("should render the current page path", () => {
//     (useAuthNav as jest.Mock).mockReturnValueOnce({
//       currentPath: "Dashboard",
//     });

//     render(<CurrentPageHeader />);

//     const header = screen.getByRole("heading");

//     expect(header).toHaveTextContent("Dashboard");
//   });

  
});
