export interface Category {
    id: number,
    title: string,
    imageUrl: string
}

export interface SignUp {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface SignIn {
    email: string,
    password: string,
}