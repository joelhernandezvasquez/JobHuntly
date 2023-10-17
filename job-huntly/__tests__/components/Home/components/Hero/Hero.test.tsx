import {render,screen} from '@testing-library/react';
import Hero from '@/home/components/Hero/Hero';

describe('test Hero Component at home page',()=>{

    it('should have a headline level 1',()=>{

        render(<Hero/>)

        const headline = screen.getByRole('heading',{level:1});

        expect(headline).not.toHaveTextContent('');
    })
})