import { Client, ID, Storage, Query, TablesDB} from 'appwrite'
import config from '../config/config.js'


export class DatabaseService{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.database = new TablesDB(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, image, status, userId}){
        try {
            return await this.database.createRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                }
            )
        } catch (error) {
            
            console.log("Appwrite service error :: createPost :: error" , error);
        }
    }

    async updatePost(slug, {title, content, image, status}){
        try {
          return await this.database.updateRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service error :: updatePost :: error" , error);
            return false
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service error :: deletePost :: error" , error);
            return false
        }
    }

    async getPost(slug){
        try {
           return await this.database.getRow(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service error :: getPost :: error" , error);
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.database.listRows(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service error :: getPosts :: error" , error);
            return false
        }
    }


    // upload files/ images

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
                
            )
        } catch (error) {
            console.log("Appwrite service error :: uploadFile :: error" , error);
            return false
        }
    }

    async deleteFile(fileid){
        try {
             await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileid
            )
            return true
        } catch (error) {
            console.log("Appwrite service error :: deleteFile :: error" , error);
            return false
        }
    }

        getFilePreview(fileid){
            return this.bucket.getFileView(
                config.appwriteBucketId,
                fileid
            )
        }
}


const databaseService = new DatabaseService()

export default databaseService;