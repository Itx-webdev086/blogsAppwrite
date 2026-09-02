import {useState, useEffect, useId} from 'react'
import {Container, Postcard} from '../components'
import databaseService from '../appwrite/database'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Hero from '../assets/hero.jpg'

function Home() {
    const userData = useSelector(state => state.auth.status)
    const [posts, setPosts] = useState([])
    const id = useId()
    useEffect(() => {
        databaseService.getPosts().then((posts) => {
            if (posts){
            setPosts(posts.rows)
            }
        })
    }, [])
    
   if (!userData) {
    return (
        <div className='mt-20 h-screen w-full'>
        <div className='flex justify-start items-center p-10 min-h-full w-full border border-gray-900 bg-cover bg-center' style={{ backgroundImage: `url(${Hero})` }}>
         <div className="space-y-5">
            <div className='text-4xl text-gray-800 font-extrabold font-serif'>
                <h1>Your <br></br> thoughts & stories</h1>
                <p className="font-medium text-gray-800">A place where stories begin, and people connect.</p>
            </div>
            <div className='flex justify-start items-center gap-4'>
            <Link to="/login" className='text-md text-white bg-gray-800 rounded-md py-2 px-4'>Start connecting</Link>
            </div>
            </div>
        </div>
        </div>
        
    )
   }
   return(
       <Container>
            <div className='py-10 mt-28'>
            <div className = "flex flex-wrap justify-center gap-4">
            {posts ? (
            posts.map((post) => (
                <div key={id} className= "w-full sm:w-1/2 md:w-1/4 bg-gray-100 rounded-lg shadow-xl shadow-gray-500 p-4">
                <Postcard {...post} />
                </div>
            )) ) : <p className='text-3xl text-gray-800 text-center'>No posts found...</p>}
            </div>
    </div>
        </Container>
   )
}

export default Home
