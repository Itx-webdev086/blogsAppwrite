import { useEffect, useState} from 'react'
import {Container, Button} from '../components'
import databaseService from '../appwrite/database'
import {Link , useNavigate, useParams} from 'react-router-dom'
import parse from 'html-react-parser'
import {useSelector } from 'react-redux'

function Post() {

    const {slug} = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)

    const userdata = useSelector(state => state.auth.userData)

    const isAuthor = post && userdata ? post.userId === userdata.$id : false

    useEffect(() => {
        if (slug){
            databaseService.getPost(slug).then((post) => {
                if (post){
                    setPost(post)
                }else{
                    navigate('/')
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])

    const deletePost = () => {
        databaseService.deletePost(post.$id).then((status) => {
            if (status){
                databaseService.deleteFile(post.image)
                navigate('/')
            }
        })
    }

    return post ? (
        <Container>
                <div className='py-10 mt-28 space-y-8'>

                <div className = "mt-5 text-center p-3 bg-teal-500 rounded-lg">
                    <h1 className="text-3xl text-white">{post.title}</h1>
                </div>

                <div className='flex flex-wrap flex-col space-y-5'>

                
                <div className='w-full h-full flex justify-center items-center rounded-lg'>
                    <img
                    src={databaseService.getFilePreview(post.image)}
                    alt={post.title}
                    className="w-full h-50 md:h-96 object-cover rounded-lg"
                    />
                </div>
            

                
                <div className='text-justify w-full'>
                    <p className="browser-css">{parse(post.content)}</p>
               </div>
               {isAuthor && (
                <div className="flex justify-center gap-6">
                    <Link
                    to={`/editblog/${post.$id}`}
                    >
                        <Button bgColor='bg-green-500' className='active:bg-teal-400'>Edit</Button>
                    </Link>
                    <Button bgColor= "bg-red-500" className='active:bg-red-400' onClick={deletePost}>Delete</Button>
                </div>
               )}
               </div>
               </div>
        
            </Container>
    ) : null
}

export default Post
