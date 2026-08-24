import { Link } from 'react-router-dom'
import { Container , Logo} from '../index'

function Footer() {
    return (
        <footer className='pt-5 bg-gray-800'>
            <Container>
               <div className='flex flex-wrap flex-col md:flex-row gap-5 justify-start md:justify-between items-start pb-5 px-5'>

                <div className='w-full flex justify-center'>
                    <Link to='/'>
                    <Logo className='w-32 h-20 rounded object-cover' />
                    </Link>
                </div>

                <div>
                    <h2 className='text-2xl'>Pages</h2>
                    <ul>
                        <li className='hover:text-teal-500 text-white'>
                            <Link to=''>
                            Home
                            </Link>
                        </li>
                        <li className='hover:text-teal-500 text-white'>
                            <Link to=''>
                            AllPosts
                            </Link>
                        </li>
                        <li className='hover:text-teal-500 text-white'>
                            <Link to=''>
                            About Us
                            </Link>
                        </li>
                        <li className='hover:text-teal-500 text-white'>
                            <Link to=''>
                            Featured Posts
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-2xl'>Contact</h2>
                    <div className='flex flex-col'>
                        <Link to='' className='text-white hover:text-teal-500'>
                        Whatsapp
                        </Link>
                        <Link to='' className='text-white hover:text-teal-500'>
                        Facebook
                        </Link>
                        <Link to='' className='text-white hover:text-teal-500'>
                        Linkedin
                        </Link>
                        <Link to='' className='text-white hover:text-teal-500'>
                        Youtube
                        </Link>
                        <Link to='' className='text-white hover:text-teal-500'>
                        Instgram
                        </Link>
                    </div>

                </div>

               </div>
               <hr />
               <div className='w-full text-center py-3 '>
                <p className='text-white'>@AR DigiTech Planet 2026. All rights reserved.</p>
               </div>
            </Container>

        </footer>
    )
}

export default Footer
