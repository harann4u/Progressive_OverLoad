
import { SubmitHandler,useForm } from "react-hook-form"; 
import './LSPages.css'


type Formfileds = {
  email:string,
  password: string,
  ConfirmPassword:string
}

const SignupForm = () => {
  
  const {
    register,
    handleSubmit,
    setError,watch,
    formState:{errors,isSubmitting},
  } = useForm<Formfileds>()


  const signUpSubmit: SubmitHandler<Formfileds> = async (data)=>{
    console.log(data)
  }

  return (
    <div className='form_signup' onSubmit={handleSubmit(signUpSubmit)} >
      <form action="">
        <div className='form_Elements'>
          <h1>Signup</h1>
          <input 
              {...register("email",{
                 required:"Email is Required",
                 pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                 }
              })}
              type="text"
              className='box'
              placeholder='Email'
            />
              {errors.email  && (<div >{errors.email.message}</div>) }
            <input 
                 {...register("password",{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long'
                  }
                 })}
                className = "box"  
                type="password" 
                placeholder='Create password'
              />
               {errors.password  && (<div className='text-red-500'>{errors.password.message}</div>) }
             <input 
                 {...register("ConfirmPassword",{
                  required: 'Please confirm your password',
                  validate:(value) => value === watch('password') || "password is not match"
                 })}
                  className = "box"  
                  type="password" 
                  placeholder='Confirm password'
              />
               {errors.ConfirmPassword  && (<div className='text-red-500'>{errors.ConfirmPassword.message}</div>) }
            <button  className='signUpButton' disabled = {isSubmitting} type='submit'  >{isSubmitting? "Loading...":"signup"}</button>
           <p className='SignUpLead'>Already have an account? Login</p>
        </div>
      </form>
      
    </div>
  )
}

export default SignupForm
// function watch(arg0: string) {
//   throw new Error('Function not implemented.');
// }

