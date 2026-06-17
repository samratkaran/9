import Config from "../config/Config";
import {Client, Account , ID , TablesDB, Storage, Query} from 'appwrite'

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

    async updatePost(){

    }

}

const service = new Service()
export default service