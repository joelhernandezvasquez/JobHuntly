import { screen,render, fireEvent } from "@testing-library/react";
import Dropdown from "@/components/Dropdown/Dropdown";
import { dropdownOptions } from "@/helper/data/jobLocationsData";

describe('tests suite on Dropdown component',()=>{
  
    it('should open and close the dropdown options when dropdown button gets click',()=>{
       render(<Dropdown options={dropdownOptions} onSelectOptionCallback={()=>{}}/>);
       const dropdownBtn = screen.getByRole('button');
       const dropdownBody = screen.getByTestId("dropdownBody");
      
       expect(dropdownBody).not.toHaveClass('show_dropdown');

       fireEvent.click(dropdownBtn);
       expect(dropdownBody).toHaveClass('show_dropdown');
       

       fireEvent.click(dropdownBtn);
       expect(dropdownBody).not.toHaveClass('show_dropdown');

    })

    it('should show the option selected and close the dropdown',()=>{
        render(<Dropdown options={dropdownOptions} onSelectOptionCallback={()=>{}}/>);
        const dropdownBtn = screen.getByRole('button');
        const dropdownBody = screen.getByTestId("dropdownBody");
        const optionList = screen.getAllByRole('listitem');
        const optionSelected = optionList[2];
        const optionSelectedText = optionSelected.textContent;
        

        fireEvent.click(dropdownBtn);
        expect(dropdownBody).toHaveClass('show_dropdown');

        fireEvent.click(optionSelected);

        expect(dropdownBody).not.toHaveClass('show_dropdown');
        expect(optionSelected).toHaveTextContent(optionSelectedText!);
    
    })
})