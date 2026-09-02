import  { useState } from 'react'
import authservice from '../appwrite/auth'
import { Link , useNavigate } from 'react-router-dom'
import { login as storelogin } from '../store/authSlice'
import { Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const [error, setError] = useState('')

    const login = async(data) => {
        setError('')
        try {
           const session =  await authservice.login(data)

           if (session) {
            const userData = await authservice.getCurrentUser()
            if (userData) {
                dispatch(storelogin({userData: userData}))
                navigate('/')
            } 
           }
            
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        
        <div className='w-full flex justify-center items-center p-5 mt-28'>
            <div className='w-2xl p-5 border border-gray-400 rounded-lg flex flex-col'>
            <div className='mx-auto flex justify-center items-center'>
               <span>
                <Logo />
                </span>
            </div>
            <h2 className='text-center font-light mt-5'>Sign in to your account !</h2>

            <p className='text-center mt-5'>Dont have an account ? <Link to={'/signup'} className = 'text-sky-400 font-semibold'>SingUp</Link></p>

            {error && <p className='text-red-500 text-center mt-5'>{error}</p>}

            <form onSubmit={handleSubmit(login)} className='mt-5'>
                 <div className='space-y-5'>
                    <Input
                    type = 'email'
                    label = 'Email : '
                    placeholder = 'Enter your email..'
                    {...register('email', {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 
                            'Email address must be a valid address'
                        }
                    })}
                    />
                    <Input
                    type = 'password'
                    label = 'Password : '
                    placeholder = 'Enter password..'
                    {...register('password', {
                        required: true
                    })}
                    />

                    <Button type='submit' className='w-full active:bg-teal-400'>Login</Button>
                 </div>
            </form>
</div>
        </div>
    )
}

export default Login

