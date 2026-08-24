import {useState, useEffect, useId} from 'react'
import {Container, Postcard} from '../components'
import databaseService from '../appwrite/database'
import { useSelector } from 'react-redux'

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
        <div className='py-10 mt-28'>
        <div className='flex justify-center items-center'>
            <p className='text-3xl text-gray-500'>Please login to view posts...</p>
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
