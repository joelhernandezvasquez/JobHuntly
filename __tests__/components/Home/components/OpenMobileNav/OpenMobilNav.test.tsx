import OpenMobileNav from '@/home/components/OpenMobileNav/OpenMobileNav';
import {fireEvent, render,screen} from '@testing-library/react';


describe('Test on Open Mobile nav component',()=>{

    it('should show the open mobile menu',()=>{
        render(<OpenMobileNav/>);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    })

    it('opens mobile navigation when openMenu button is clicked',()=>{
        
        render(<OpenMobileNav/>);

        const button = screen.getByRole('button');

        fireEvent.click(button);
        const mobileNavigation = screen.queryByTestId("mobile-nav");

        expect(mobileNavigation).toBeInTheDocument();

    })

    it('closes mobile navigation when openMenu button is clicked',()=>{
        
        render(<OpenMobileNav/>);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const mobileNavigation = screen.queryByTestId("mobile-nav");

        expect(mobileNavigation).toBeInTheDocument();

        fireEvent.click(button);

        expect(mobileNavigation).not.toBeInTheDocument();

    })
})