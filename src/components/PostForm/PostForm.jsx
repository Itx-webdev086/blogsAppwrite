import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE , Logo} from '../index'
import databaseService from '../../appwrite/database'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

function PostForm({post}) {

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.slug || '',
            status: post?.status || 'active'
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
    console.log("userData:", userData);

    const submit = async (data) => {
       
       
        if (post) {
            const file = data.image[0] ? await databaseService.uploadFile(data.image[0]) : null
            if (file){
                databaseService.deleteFile(post.image)
            }
            const dbPost = await databaseService.updatePost(post.$id, {
                ...data,
                image: file ? file.$id : undefined
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            const file =  await databaseService.uploadFile(data.image[0])
        
            if (file){
                const fileid = file.$id
                data.image =  fileid
                const dbPost = await databaseService.createPost({
                    ...data,
                    userId: userData.$id
                })
                
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
  
}

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') 
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-')
            return ''
        }, [] )

    React.useEffect(() => {
        const subscription = watch((value, {name}) => {
            if (name === 'title')
                setValue('slug', slugTransform(value.title), {shouldValidate: true})
        })
        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])

    return (

        <div className='w-full flex justify-center items-center p-5'>
            <div className='w-2xl p-5 border border-gray-400 rounded-lg flex flex-col'>
            <div className='mx-auto bg-gray-800 flex justify-center items-center'>
               <span>
                <Logo />
                </span>
            </div>
            <h2 className='text-center text-gray-800 font-semibold my-5'>Add/Edit your blog !</h2>
        <form onSubmit={handleSubmit(submit)}>

            
            <Input
            label='Title'
            name='title'
            className = 'mb-4'
            placeholder='Enter title'
            {...register('title', {required: true})}
            />

            <Input
            label='Slug'
            name='slug'
            className = 'mb-4'
            placeholder='Enter slug'
            {...register('slug', {required: true})}
            onInput={(e) => setValue('slug', slugTransform(e.currentTarget.value), {shouldValidate: true})}
            />
              
            <Input
            type='file'
            label='Image'
            className = 'mb-4'
            accept='image/png, image/jpg, image/jpeg, image/gif'
            {...register('image', {required: !post})}
             />
             

             {post && <img src={databaseService.getFilePreview(post.image)} alt={post.title} className='w-full h-full object-cover rounded' />}

             <Select
             options={[ "active", "inactive"]}
                label='Status'
                name='status'
                className = 'mb-4'
                {...register('status', {required: true})}
             />

            <RTE
            name='content'
            control={control}
            label='Content'
            defaultValue={getValues('content')}
            />

             <Button type='submit' className='mt-4 w-full'>
                {post ? 'Update Post' : 'Create Post'}
             </Button>
            
        </form>
        </div>
        </div>
    )
}

export default PostForm
