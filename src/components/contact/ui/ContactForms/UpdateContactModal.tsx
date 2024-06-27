import { UploadFileButton } from '@/components';
import style from './style.module.css';
import { Contact } from '@/interfaces/Contact';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/ui/Error/ErrorMessage';
import { updateContact } from '@/actions/contact/updateContact';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';

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

interface Props{
    data:Contact | any,
    closeModal:() => void
  }

export const UpdateContactModal = ({data}:Props) => {
  const router = useRouter();
  const {userId} = data;
  const { handleSubmit, register, formState: { isValid,errors }, reset } = useForm<FormInputs>({
    defaultValues: {
      ...(data as any),
    }
  });


  const onUpdateContact = async (data: FormInputs) =>{
     try{
        const request = await updateContact(userId,data as Contact);
         console.log({request})
        if(!request.ok){
          toast.error(request.message,{position:'top-center'});
          return;
        }

        toast.success('Contact Updated Successfully',{position:'top-center'});
        router.refresh();   
     }
     catch(error){
      if(error instanceof Error){
        console.log(error.message);
        toast.error(error.message);
      }
      console.log(error);
     }
  }

  return (
    <form onSubmit={handleSubmit(onUpdateContact)}>
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
     Update Contact
    </button>
       </div>
       <Toaster/>
    </form>
  )
}
