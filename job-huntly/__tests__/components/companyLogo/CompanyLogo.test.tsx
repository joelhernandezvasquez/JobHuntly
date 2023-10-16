import {render,screen} from '@testing-library/react';
import CompanyLogo from '@/components/companyLogo/CompanyLogo';

it('it should have the company Name JobHuntly',()=>{
    render(<CompanyLogo/>) // Arrange

    const myElement = screen.getByText('JobHuntly');    // Act

    expect(myElement).toBeInTheDocument(); // Assert
})

it('it should have the company logo',()=>{
    render(<CompanyLogo/>) // Arrange

    const svgElement = screen.getByRole("img");

    expect(svgElement).toHaveClass('logo_image');
})