import { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import authservice from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import {Button, Input, Logo} from './index'
import { useForm } from 'react-hook-form'



function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const signup = async(data) => {
        setError('')
        try {
           const session = await authservice.createAccount(data)
           if (session) {
            const userData = await authservice.getCurrentUser()
            if (userData) dispatch(login({userData : userData}));
                 navigate('/')
            }
           }
        catch (error) {
            setError(error.message)
        }
    }
    return (
          <div className='w-full flex justify-center items-center p-5'>
            <div className='w-2xl p-5 border border-gray-400 rounded-lg flex flex-col'>
            <div className='mx-auto flex justify-center items-center'>
                <span>
                <Logo />
                </span>
                
            </div>
            <h2 className='text-center font-light mt-5'>Create account !</h2>

            <p className='text-center mt-5'>Already have an account ? <Link to={'/login'}>SingIn</Link></p>

            {error && <p className='text-red-500 text-center mt-5'>{error}</p>}

            <form onSubmit={handleSubmit(signup)} className='mt-5'>
                 <div className='space-y-5'>
                    <Input
                    type = 'text'
                    label = 'Full Name : '
                    placeholder = 'Enter your full name..'
                    {...register('name' , {
                        required: true
                    })}
                    />
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

                    <Button type='submit' className='w-full active:bg-teal-400'>Create Account</Button>
                 </div>
            </form>
</div>
        </div>
        
    )
}

export default Signup
