import {useState, useEffect} from 'react'
import {Container, PostCard} from '../components'
import databaseService from '../appwrite/database'


function AllPosts() {

    const [posts, setPosts] = useState([])

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
                <div key={post.$id} className= "w-full sm:w-1/2 md:w-1/4 bg-gray-50 rounded-lg shadow-xl shadow-gray-500 p-4 hover:bg-gray-100">
                <PostCard {...post} />
                </div>
            ))} 
            </div>
        </div>
        </Container>
    )
}
export default AllPosts
