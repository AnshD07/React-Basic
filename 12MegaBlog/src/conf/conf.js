const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), 
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID), 
}

//! it is very good practice to access environment varible and all get in string

export default conf;
