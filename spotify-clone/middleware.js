import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {

    // token will exist if the user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET })
    
    const { pathname } = req.nextUrl

    const url = req.nextUrl.clone()
    url.pathname = '/login'
  
    // ALlow the request if the following is true:
    // 1) it's a request to next-auth session
    // 2) the token exists

    if (pathname.includes('/api/auth') || token) {
        console.log("api/auth and token")
        return NextResponse.next()
    }

    // redirect to login page if the user is not logged in and they are requesting a protected routeing a protected route
    // if (!token && pathname !== '/login') {
    //     console.log("Log In Page")
    //     return NextResponse.redirect(url)
    // }
}