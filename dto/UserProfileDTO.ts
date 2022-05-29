export type UserProfileDTO = {
    id: number,
    role: 'Human' | 'SuperHuman' | 'God',
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string,
    job_desc: string,
    address: string,
    mobile: string,
    profile_image_url: string,
    registration_date: string,
    confirmed: number,
}