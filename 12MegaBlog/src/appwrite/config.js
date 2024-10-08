import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBucketId,
                slug,

                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // document ID
                { //data
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // document ID
            )

            return true; // for inner peace
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) { //! jenu status active hoy ejj file apvani bhai 
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error;
        }
    }

    // file Upload Services (method)
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();


export default service;