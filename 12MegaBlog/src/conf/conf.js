const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT),
    appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE),
    appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION),
    appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET),
}


export default conf