import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    //! making async method
    async createAccount({ email, password, name }) {
        //* this method also can be failed so try and catch is good practice
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //* call another method

                this.account.login({ email, password })
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            //! directly return when task is completed
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            //! if there not get return 
            return await this.account.get()
        } catch (error) {
            console.log(`appwrite service :: getCurrentUser :: error  ${error}`);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService()

export default authService;