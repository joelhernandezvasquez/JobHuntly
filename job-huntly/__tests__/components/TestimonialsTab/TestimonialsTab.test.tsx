
import {act, fireEvent, render,renderHook,screen} from '@testing-library/react';
import TestimonialsTab from '@/components/TestimonialsTab/TestimonialsTab';
import { testimoniesArray } from '@/helper/data/testimonies';
import useTabs from '@/hooks/useTabs';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';

describe('', ()=>{

    it('testimonies prop cannot be empty',()=>{
        render(<TestimonialsTab testimonies={testimoniesArray}/>)
     
        expect(testimoniesArray.length).toBeGreaterThan(0);
     })
     
     it('it should have active button state value equals to 1 when the component gets mounted for the first time',()=>{
     
         render(<TestimonialsTab testimonies={testimoniesArray}/>)
         const forwardButton = screen.getByLabelText('Next');
         const {result} = renderHook(()=> useTabs());
     
         expect(result.current.selectedTab).toBe(0);
         expect(forwardButton).toHaveClass('active_btn');
     })
     
     it('should move to next testimony when forward button gets clicked',()=>{
         
         render(<TestimonialsTab testimonies={testimoniesArray}/>);
        
         const {result} = renderHook(()=> useTabs());
         const {handleSeletedTab} = result.current;
         const forwardButton = screen.getByLabelText('Next');
       
     
         fireEvent.click(forwardButton);
        
         act(()=>{
            handleSeletedTab(result.current.selectedTab + 1)
         })

         expect(result.current.selectedTab).toBe(1);
         expect(forwardButton).toHaveClass('active_btn');
     })

     it('should move to previous testimony when previous button gets clicked',()=>{
         
        render(<TestimonialsTab testimonies={testimoniesArray}/>);
       
        const {result} = renderHook(()=> useTabs());
        const {handleSeletedTab} = result.current;
        const forwardButton = screen.getByLabelText('Next');
        const previousButton = screen.getByLabelText('Previous');
      
        fireEvent.click(forwardButton);

        act(()=>{
            handleSeletedTab(result.current.selectedTab + 1)
         })

        fireEvent.click(previousButton);
        expect(result.current.selectedTab).toBeGreaterThan(0);

        act(()=>{
           handleSeletedTab(result.current.selectedTab - 1)
        })

        expect(result.current.selectedTab).toBe(0);
        expect(previousButton).toHaveClass('active_btn');
    })

    it('testimony card should be render inside testimonial tabs component',()=>{
        render(<TestimonialsTab testimonies={testimoniesArray}/>)
        
        const testimonyCard = screen.getByTestId('testimony-card');
       
        expect(testimonyCard).toBeInTheDocument();
    })
     
     
     
})


