import {useState, useEffect, useId} from 'react'
import {Container, Postcard} from '../components'
import databaseService from '../appwrite/database'


function AllPosts() {

    const [posts, setPosts] = useState([])
    const id = useId()

    useEffect(() => {
        databaseService.getPosts().then((posts) => {
            if (posts){
                setPosts(posts.rows)
            }
        })
    }, [])
    return (
        <Container>
            <div className='py-10 mt-28'>
            <div className = "flex flex-wrap justify-center gap-4">
               
            {posts.map((post) => (
                <div key={id} className= "w-full sm:w-1/2 md:w-1/4 bg-gray-50 rounded-lg shadow-xl shadow-gray-500 p-4 hover:bg-gray-100">
                <Postcard {...post} />
                </div>
            ))} 
            </div>
        </div>
        </Container>
    )
}
export default AllPosts
