
import { Container } from '../index'
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='bg-gray-800'>
            <Container>
               
              
               <div className='w-full text-center py-2 flex flex-col md:flex-row justify-between gap-y-3'>
                <div>
                <p className='text-white'>@AR DigiTech Planet 2026. All rights reserved.</p>
                </div>
                <div>
                    <a
                    href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block mr-3'>
                    <FaFacebook className='text-white text-2xl cursor-pointer hover:text-blue-600 active:text-blue-600' />
                    </a>
                    <a
                    href='https://github.com/Itx-webdev086'
                    target='_blank'
                    rel='noopener noreferrer' 
                    className='inline-block mr-3'>
                        <FaGithub className='text-white text-2xl cursor-pointer hover:text-black active:text-black' />
                    </a>
                    <a 
                    href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block mr-3'>
                        <FaInstagram className='text-white text-2xl cursor-pointer hover:text-pink-600 active:text-pink-600' />
                    </a>
                    <a 
                    href='https://wa.me/923404228368'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block mr-3'>
                        <FaWhatsapp className='text-white text-2xl cursor-pointer hover:text-green-600 active:text-green-600' />
                    </a>
                    <a 
                    href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block mr-3'>
                        <FaLinkedinIn className='text-white text-2xl cursor-pointer hover:text-blue-600 active:text-blue-600' />
                    </a>
                </div>

               </div>
            </Container>

        </footer>
    )
}

export default Footer
