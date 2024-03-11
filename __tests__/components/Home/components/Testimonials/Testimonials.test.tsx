import {render,screen} from '@testing-library/react';
import Testimonials from '@/home/components/Testimonials/Testimonials';

it('should have the h2 present',()=>{
    render(<Testimonials/>)

    const headline = screen.getByRole('heading',{level:2});

    expect(headline).toBeTruthy;
})