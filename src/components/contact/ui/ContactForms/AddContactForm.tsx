
'use client';
import { useFormStatus } from 'react-dom';
import { UploadFileButton } from '@/components/ui/uploadFileButton/UploadFileButton';
import {useForm} from 'react-hook-form';
import style from './style.module.css';
import ErrorMessage from '@/components/ui/Error/ErrorMessage';

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  notes?:string;
  company?:string;
  avatar?:string
}

export const AddContactForm = () => {
  const { handleSubmit, register, formState: { isValid ,errors}, reset } = useForm<FormInputs>({});

  const onSubmit = (data: FormInputs) =>{
    console.log({data});
  }
  
    return (
    <form  onSubmit={ handleSubmit( onSubmit ) } className={style.form}>
       <div className={'form_field'}>
        <label className={style.label}>First Name</label>
        <input 
         type="text"
         className={style.input}
         id='nameContact'
         placeholder='Enter your first name'
         { ...register('firstName', { required: true}) }
        />
        {errors.firstName?.type === "required" && (
          <ErrorMessage>First name is required</ErrorMessage>
        )}
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Last Name</label>
        <input 
         type="text"
         className={style.input}
         id='lastNameContact'
         placeholder='Enter your last name'
         { ...register('lastName', { required: true  }) }
        />
        {errors.lastName?.type === "required" && (
          <ErrorMessage>Last name is required</ErrorMessage>
        )}
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Email Address</label>
        <input 
         type="text"
         className={style.input}
         id='emailContact'
         placeholder='Enter your email address'
         { ...register('email', { required: true,pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email address"
        }  }) }
        />
         {errors.email?.type === "required" && (
          <ErrorMessage>Email is required</ErrorMessage>
        )}
          {errors.email?.type === "pattern" && (
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        )}
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Phone Number</label>
        <input 
         type="text"
         className={style.input}
         id='phoneContact'
         placeholder='(646)-841-6874'
         { ...register('phone', { required: true , 
          pattern: {
          value: /^\(\d{3}\) \d{3}-\d{4}$/,
          message: "Invalid phone number format"
        }}) }
        />
         {errors.phone?.type === "required" && (
          <ErrorMessage>Phone number is required</ErrorMessage>
        )}
         {errors.phone?.type === 'pattern' && (
          <ErrorMessage>Invalid phone number format</ErrorMessage>
        )}
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Role</label>
        <input 
         type="text"
         className={style.input}
         id='roleContact'
         placeholder='ex: Recruiter'
         { ...register('role', { required: true  }) }
        />
         {errors.role?.type === "required" && (
          <ErrorMessage>Role of the contact is required</ErrorMessage>
        )}
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Company</label>
        <input 
         type="text"
         className={style.input}
         id='companyContact'
         placeholder='Google'
         { ...register('company') }
        />
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Attach image contact</label>
         <UploadFileButton/>
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Notes</label>
        <textarea 
         className={`${style.input} ${style.textarea}`}
         id='notesContact'
         placeholder='Add Aditional Information.'
         { ...register('notes') }
        />
       </div>

       <div className={style.form_btn_container}>
       <button 
         disabled={!isValid}
         type="submit" 
         className={`${style.add_contact_btn} ${!isValid && style.pending_btn}`}
      >
     Add contact
    </button>
         {/* <SubmitContactButton/> */}
       </div>
    </form>
  )
}
// function SubmitContactButton() {
//   const { pending } = useFormStatus();
//   console.log(pending)
//   return (
//     <button 
//       type="submit" 
//       className={`${style.add_contact_btn} ${pending && style.pending_btn}`}
//       // className={ clsx({
//       //   "btn-primary": !pending,
//       //   "btn-disabled": pending
//       // })}
//       disabled={ pending }
//       >
//      Add contact
//     </button>
//   );
// }


