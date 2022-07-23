import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server';
import login from "./pages/login";

export async function middleware(req) {

    //Token will exist if the user is logged in
    const token = await getToken({req, secret: process.env.JWT_SECRET});
    const {pathname} = req.nextUrl;

    //Allow the request if the following is true..
        // 1. If the Token Exist
    if (pathname.includes('/api/auth') || token){
        return NextResponse.next();
    }
    
    if(!token && pathname !== '/login'){

        const loginPage = '../login'
        return NextResponse.redirect(new URL(loginPage, req.url))

    }

}