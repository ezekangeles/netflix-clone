import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContextProvider'


const Login = () => {

    const {user, logIn} = UserAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [err, seterr] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await logIn(email, password)
            navigate('/')
        }catch(error){
            console.log(error)
            seterr(error.message)
            alert(error.message)
        }
    }

  return (
    <div>
       <div className='w-full h-screen relative'>
        <img className='w-full h-screen object-cover hidden sm:block absolute'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/d583cb90-3cfe-4469-a6ef-6d9e13c31f77/PH-en-20230417-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/50 w-full h-screen absolute top-0 left-0'></div>
        <div className='w-full fixed z-50 py-20 px-4'>
            <div className='max-w-[400px] h-[450px] bg-black/75 mx-auto'>
                <div className='w-[300px] mx-auto py-10'>
                    <h1 className='text-2xl font-bold'>Sign In</h1>
                    <form onSubmit={handleSubmit} className='my-5'>
                        <input onChange={(e) => setEmail(e.target.value)} className='w-full my-1 py-1 px-2 text-slate-400 outline-none bg-slate-900 placeholder:text-slate-600' type="email" placeholder='Email' />
                        <input onChange={(e) => setPassword(e.target.value)} className='w-full my-1 py-1 px-2 text-slate-400 outline-none bg-slate-900 placeholder:text-slate-600' type="password" placeholder='Password' />
                        <button className='w-full my-4 bg-red-700 p-1 rounded-md'>Sign In</button>
                        <div className='flex justify-between'>
                            <div>
                                <input className='w-3 h-3 accent-red-600' type="checkbox" id='check' /> <label className='text-sm text-slate-500' htmlFor="check">Remeber me</label>
                            </div>
                            <p className='text-slate-500 text-sm'>Need Help?</p>
                        </div>
                        <p className='mt-4 text-sm text-slate-500'>New to Netflix? <Link to='/signup'><button className='text-slate-100'>Sign Up</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
