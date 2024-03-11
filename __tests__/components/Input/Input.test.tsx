import {fireEvent, render,screen} from '@testing-library/react';
import Input from '@/components/Input/Input';

describe('Test suites on Input component',()=>{

    it('should show the error message and the invalid state if isInvalid prop is true',()=>{
        const jobSearch = '';
        const errorMessage = 'Job keyword is required';

               render(<Input
                 id={'id-test'}
                 name={'name-test'}
                 defaultValue=''
                 errorMessage={errorMessage}
                 isInvalid={jobSearch === ''}
                 onValuedChange={()=>{}}
              />)

            const input = screen.getByTestId('input-component-test');

         expect(jobSearch === '').toBe(true);
         expect(errorMessage).toBeTruthy;
         expect(input).toHaveClass('input_container_field_error_state');
    })

    it('should remove the error state when input gets filled',()=>{
        let jobSearch = '';
        const errorMessage = 'Job keyword is required';

              const{rerender} =  render(<Input
                 id={'id-test'}
                 name={'name-test'}
                 defaultValue=''
                 errorMessage={errorMessage}
                 isInvalid={jobSearch === ''}
                 onValuedChange={()=>{}}
              />)

            const input = screen.getByTestId('input-component-test');

         expect(jobSearch === '').toBe(true);
         expect(errorMessage).toBeTruthy;
         expect(input).toHaveClass('input_container_field_error_state');
         jobSearch = 'I am not empty';

         rerender(<Input
            id={'id-test'}
            name={'name-test'}
            defaultValue='value test'
            errorMessage={errorMessage}
            isInvalid={jobSearch === ''}
            onValuedChange={()=>{}}/>)
            
            expect(jobSearch === '').toBe(false);
            expect(errorMessage).toBeFalsy;
            expect(input).not.toHaveClass('input_container_field_error_state');

    })
})