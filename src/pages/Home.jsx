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
        <div className='mt-18 h-screen w-full'>
        <div className='flex justify-start items-center p-10 h-[90%] w-full' style={{ backgroundImage: `url(${Hero})` }}>
         <div className="space-y-5 w-2xl">
            <div className='text-gray-800 font-serif'>
                <h1 className='text-7xl font-extrabold'>Your <br></br> thoughts & stories</h1>
                <p className="font-light text-gray-800">A place where stories begin, and people connect.</p>
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
