const Config = {

    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appwriteStorageId: String(import.meta.env.VITE_APPWRITE_STORAGE_ID)
}


export default Config