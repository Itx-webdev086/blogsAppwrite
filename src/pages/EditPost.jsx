import {useState, useEffect} from 'react'
import {Container, PostForm} from '../components'
import databaseService from '../appwrite/database'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditPost() {

    const {slug} = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (slug){
        databaseService.getPost(slug).then((post) => {
            if (post) {
                setPost(post)
            }
        })
    }else{
        navigate('/')
    }
    
    }, [slug,navigate])

    return post ? (
        <div className='py-10'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
