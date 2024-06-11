import { UploadFileButton } from '@/components/ui/uploadFileButton/UploadFileButton';
import style from './style.module.css';

export const AddContactForm = () => {
    return (
    <form className={style.form}>
       <div className={'form_field'}>
        <label className={style.label}>First Name</label>
        <input 
         type="text"
         className={style.input}
         id='nameContact'
         name='nameContact'
         placeholder='Enter your first name'
        />
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Last Name</label>
        <input 
         type="text"
         className={style.input}
         id='lastNameContact'
         name='lastNameContact'
         placeholder='Enter your last name'
        />
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Email Address</label>
        <input 
         type="text"
         className={style.input}
         id='emailContact'
         name='emailContact'
         placeholder='Enter your email address'
        />
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Phone Number</label>
        <input 
         type="text"
         className={style.input}
         id='phoneContact'
         name='phoneContact'
         placeholder='(646)-841-6874'
        />
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Role</label>
        <input 
         type="text"
         className={style.input}
         id='roleContact'
         name='roleContact'
         placeholder='ex: Recruiter'
        />
       </div>

       <div className={'form_field'}>
        <label className={style.label}>Company</label>
        <input 
         type="text"
         className={style.input}
         id='companyContact'
         name='companyContact'
         placeholder='Google'
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
         name='notesContact'
         placeholder='Add Aditional Information.'
        />
       </div>

       <div className={style.form_btn_container}>
         <SubmitContactButton/>
       </div>
    </form>
  )
}
function SubmitContactButton() {
  //const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      className={style.add_contact_btn}
      // className={ clsx({
      //   "btn-primary": !pending,
      //   "btn-disabled": pending
      // })}
      // disabled={ pending }
      >
     Add contact
    </button>
  );
}
