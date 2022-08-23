import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {

    const url = req.nextUrl.clone()
    // token will exist if the user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET })
    const { pathname } = req.nextUrl
  
    if (pathname.startsWith('/_next') || pathname.includes('.')){

    }

    if(pathname.includes("/api/auth") || token){
        return NextResponse.next();
    }

//     if(!token && pathname!=="/login"){
//         url.pathname = "/login";
//         return NextResponse.redirect(url);
//     }
}