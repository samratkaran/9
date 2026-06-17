import Config from "../config/Config";
import {Client , TablesDB, Storage, Query, ID} from 'appwrite'

export class Service{

    client = new Client()
    databases;
    storage;

    constructor(){
        this.client
        .setEndpoint(Config.appwriteEndpoint)
        .setProject(Config.appwriteProjectId)

        this.tablesDB = new TablesDB(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content , featuredImage, status, userId}){
        try {
          return await this.tablesDB.createRow({
                databaseId:Config.appwriteDatabaseId,
                tableId:Config.appwriteTableId,
                rowId:slug,
           data:     {
        title , slug , content ,featuredImage , status , userId
                }
               
                
            })
        } catch (error) {
            console.log('createpost error' , error)
        }

    }

    async updatePost(slug,{title, content, featuredImage, status}){
         try {
          return await this.tablesDB.updateRow({
                databaseId:Config.appwriteDatabaseId,
                tableId:Config.appwriteTableId,
                rowId:slug,
                data:{
                title, content, featuredImage, status
                }
            })
        } catch (error) {
            console.log('updatepost error' , error)
        }

    }

    async deletePost(slug){
 try {
           await this.tablesDB.deleteRow({
                databaseId:Config.appwriteDatabaseId,
                tableId:Config.appwriteTableId,
                rowId:slug,
                
            })
            return true
        } catch (error) {
            console.log('deletepost error' , error)
            return false
        }
    }

       async getPost(slug){
 try {
          return await this.tablesDB.getRow({
                databaseId:Config.appwriteDatabaseId,
                tableId:Config.appwriteTableId,
                rowId:slug,
                
            })
            
        } catch (error) {
            console.log('get post error error' , error)
            return false
        }
    }

        async getPostList(queries = Query.equal("status" ,"active")){
 try {
          return await this.tablesDB.listRows({
                databaseId:Config.appwriteDatabaseId,
                tableId:Config.appwriteTableId,
               queries:queries,
               
                
            })
            
        } catch (error) {
            console.log('get post error error' , error)
            return false
        }
    }


    // file Upload Mehtods

    async uploadFile(file){
        try {
          return await this.storage.createFile({
                bucketId:this.storage.appwriteStorageId,
                fileId: ID.unique(),
                file
               
                
            })
            
        } catch (error) {
            console.log('Upload File error error' , error)
            return false
        }
    }

        async deleteFile(fileId){
        try {
          return await this.storage.deleteFile({
                bucketId:this.storage.appwriteStorageId,
                fileId:fileId
                
               
                
            })
            
        } catch (error) {
            console.log('Delete File error error' , error)
            return false
        }
    }
     
    async getFilePreview(fileId){

           try {
          return await this.storage.getFilePreview({
                bucketId:this.storage.appwriteStorageId,
                fileId:fileId
                
               
                
            })
            
        } catch (error) {
            console.log('Delete File error error' , error)
            return false
        }
    }


}

const service = new Service()
export default service