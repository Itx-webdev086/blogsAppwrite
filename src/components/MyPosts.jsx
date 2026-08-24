import { useEffect, useState, useId} from 'react'
import {Container, Postcard} from './index'
import databaseService from '../appwrite/database'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function MyPosts() {

    const navigate = useNavigate()
    const id = useId()
    
    const [posts, setPosts] = useState([])
    const userdata = useSelector(state => state.auth.userData)
    

    useEffect(() => {
        if (userdata){
            databaseService.getPosts([Query.equal('userId' , userdata.$id)]).then((posts) => {
               if (posts){
                setPosts(posts.rows)}
            })
        }else{
            navigate('/')
        }
    }, [userdata , navigate])

    return (
         
           <Container>
            <div className='py-10 mt-28'>
            <div className = "flex flex-wrap justify-center gap-4">
               {posts.length > 0 ? (
            posts.map((post) => (
                <div key={id} className= "w-full sm:w-1/2 md:w-1/4 bg-gray-50 rounded-lg shadow-xl shadow-gray-500 p-4 hover:bg-gray-100">
                <Postcard {...post} />
                </div>
            ))) : <p className='text-center text-3xl text-gray-800'>No posts...</p> }
            </div>
        </div>
        </Container>  
    )
    
}

export default MyPosts
