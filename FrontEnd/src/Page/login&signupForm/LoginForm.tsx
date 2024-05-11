
import { zodResolver } from '@hookform/resolvers/zod'
import {  z } from 'zod'
import { SubmitHandler,useForm } from "react-hook-form"; 
import './LSPages.css'

const schema = z.object({
  email:z.string().email(),
  password:z.string().min(4)
})

type Formfileds = z.infer<typeof schema>

const LoginForm = () => {
 
    const {
      register,
      handleSubmit,
      setError,
      formState:{errors, isSubmitting}
    } = useForm<Formfileds>({resolver:zodResolver(schema)})


    const LoginSubmit: SubmitHandler<Formfileds> = async (data)=>{
      try{
        await new Promise((resolve)=> setTimeout(resolve,1000))
        console.log(data)
        throw new Error
      }catch(Error){
        setError("root",{
          message:"This Email is already Taken"
        })
      }
     
     
    }
  return (
      <div className='form_Login' onSubmit={handleSubmit(LoginSubmit)} >
          <form>
            <div className='form_Elements'>
              <h1>Login</h1>
              <input  
                {...register("email")}
                className = "box" 
                type="text" 
                placeholder='Email'
              />
              {errors.email  && (<div >{errors.email.message}</div>) }
              <input 
                {...register("password")}
                className = "box"  
                type="password" 
                placeholder='password'
              />
                 {errors.password  && (<div className='text-red-500'>{errors.password.message}</div>) }
              <button className='LogInButton' disabled = {isSubmitting} type='submit'>{isSubmitting? "Loading...":"Submit"}</button>
              {errors.root  && (<div className='text-red-500'>{errors.root.message}</div>) }
              <p className='SignUpLead'>Not a Memeber?Sign up now</p>
            </div>
          </form>
      </div>
  
  )
}

export default LoginForm
