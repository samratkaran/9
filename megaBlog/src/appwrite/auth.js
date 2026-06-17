import Config from "../config/Config";
import {Client, Account , ID} from 'appwrite'

export class AuthService{

    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(Config.appwriteEndpoint)
        .setProject(Config.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({email ,password ,name}){
        try {
          const userAccount =  await this.account.create(ID.unique() , email , password ,name)
        
          if(userAccount){
                this.login({email , password})
          }else{
            return userAccount
          }
          
        } catch (error) {
            console.log("error in create account" , error)
            throw new error
        }
    }

    async login({email ,password}){
        try {
          const loginSession =  await this.account.createEmailPasswordSession({email , password})
          return loginSession
        } catch (error) {
            console.log("error in Login::error" , error)
            throw new error
            
        }

    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("error in getCurrentUser::error" , error)
           
        }
        
       return null
    }

    async logout(){
        try {
           return await this.account.deleteSessions()
            
        } catch (error) {
            console.log("error in logout::error" , error)
            
        }
    }

    
}




const authService = new AuthService

export default authService