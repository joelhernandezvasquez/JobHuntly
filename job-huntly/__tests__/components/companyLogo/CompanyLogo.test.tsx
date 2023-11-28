import {render,screen} from '@testing-library/react';
import CompanyLogo from '@/components/companyLogo/CompanyLogo';

it('it should have the company Name JobHuntly',()=>{
    render(<CompanyLogo theme='light'/>) // Arrange

    const myElement = screen.getByText('JobHuntly');    // Act

    expect(myElement).toBeInTheDocument(); // Assert
})

it('it should have the company logo',()=>{
    render(<CompanyLogo theme='dark'/>) // Arrange

    const svgElement = screen.getByRole("img");

    expect(svgElement).toHaveClass('logo_image');
})

it('it should render the company name black when theme is light',()=>{

    render(<CompanyLogo theme='light'/>)
    
    const companyName = screen.getByText('JobHuntly');
    
    expect(companyName).toHaveClass('light');

})

it('it should render the company name white when theme is dark',()=>{

    render(<CompanyLogo theme='dark'/>)
    
    const companyName = screen.getByText('JobHuntly');
    
    expect(companyName).toHaveClass('dark');

})

