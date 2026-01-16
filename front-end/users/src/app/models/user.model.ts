export interface User {
    id:number;

    username:string;

    password:string;

    email:string;

    role:string;

    enabled:boolean;

    createdAt:Date;

    updatedAt:Date;
}

export interface UserRequest {
    username:string;

    password:string;

    email:string;
}
