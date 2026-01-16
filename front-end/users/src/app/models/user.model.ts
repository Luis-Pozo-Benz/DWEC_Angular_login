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

export interface LoginRequest {
    username:string;

    password:string;
}

export interface LoginResponse {
    token:string;
    
    type:string;

    username:string;

    email:string;

    role:string;
}

export interface RegisterRequest {
    username:string;

    password:string;

    email:string;
}

export interface RegisterResponse {
    message:string;
}
