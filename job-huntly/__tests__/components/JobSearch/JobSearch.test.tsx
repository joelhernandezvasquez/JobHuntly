import {fireEvent, render,screen} from '@testing-library/react';
import JobSearch from '@/components/JobSearch/JobSearch';
import { dropdownOptions } from '@/helper/data/jobLocationsData';

describe('tests in JobSearch component' ,()=>{

    const jobLocation = dropdownOptions[0].option;

it('it should have the company Name JobHuntly',()=>{
   const {container} =  render(<JobSearch/>) // Arrange
 
    // eslint-disable-next-line testing-library/no-container
    const JobSearchForm = container.querySelector("form"); // Act

    expect(JobSearchForm).toBeInTheDocument(); // Assert
})


it('it should show the Job Location Options for the dropdown',()=>{
    render(<JobSearch/>)
    const valueElement =  screen.getByText(jobLocation);

    expect(valueElement).toBeInTheDocument();

 })

 it('it should show and close the menu dropdown when icon button  is clicked',()=>{
    const {container} = render(<JobSearch/>);

     // eslint-disable-next-line testing-library/no-container
     const toggleBtn = container.querySelector("#toggle-btn");
     const dropdownMenu = container.querySelector("#dropdown-menu");

    fireEvent.click(toggleBtn);

    expect(dropdownMenu).toHaveClass('show_dropdown');

    fireEvent.click(toggleBtn);

    expect(dropdownMenu).not.toHaveClass('show_dropdown');

 })


 it('should close the dropdown when an <li> element is clicked',()=>{
    const {container} = render(<JobSearch/>);
    // eslint-disable-next-line testing-library/no-container
    const toggleBtn = container.querySelector("#toggle-btn");
    const listMenu = screen.getByRole('list');
    const dropdownMenu = container.querySelector("#dropdown-menu");

    expect(dropdownMenu).not.toHaveClass("show_dropdown");

    fireEvent.click(toggleBtn);

    expect(dropdownMenu).toHaveClass('show_dropdown');

    const liClick = listMenu.firstElementChild;

    fireEvent.click(liClick);
    
    expect(dropdownMenu).not.toHaveClass('show_dropdown');

 })

 it('it should have the value option selected when click element',()=>{
    const {container} = render(<JobSearch/>);
    // eslint-disable-next-line testing-library/no-container
    const toggleBtn = container.querySelector("#toggle-btn");
    const listMenu = screen.getByRole('list');
    const dropdownMenu = container.querySelector("#dropdown-menu");
    const locationValueSelected = container.querySelector('#job-location');

    expect(dropdownMenu).not.toHaveClass("show_dropdown");

    fireEvent.click(toggleBtn);

    expect(dropdownMenu).toHaveClass('show_dropdown');

    const liClick = listMenu.firstElementChild;

    fireEvent.click(liClick);
    
    expect(dropdownMenu).not.toHaveClass('show_dropdown');
    const isValidElement = dropdownOptions.find((element) => element.option === locationValueSelected?.textContent);
    expect(isValidElement).toBeTruthy();
 })

})



