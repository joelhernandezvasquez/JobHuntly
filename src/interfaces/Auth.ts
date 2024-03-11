export interface Auth{
    user: {
        id: string,
        name: string,
        email: string,
        emailVerified: boolean,
        role: string,
        image: string | null
    },
    token:string,
    errors?: {
        email?: {
            type: string,
            value: string,
            msg: string,
            path: string,
            location: string
        },
        password?: {
            type: string,
            value: string,
            msg: string,
            path: string,
            location: string
        },
       message: string
        
    }
}