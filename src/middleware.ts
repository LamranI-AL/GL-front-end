import { type NextRequest } from "next/server";
import { updateSession } from "@/app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };

// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";
// import { NextRequest, NextResponse } from "next/server";

// export default withAuth(
//   async function middleware(request: NextRequest) {
//     const pathName = request.nextUrl.pathname;
//     const isAuth = await getToken({ req: request }); // Récupère le token d'authentification

//     const protectedRoutes = [
//       // "/chat/profile",
//       "/dashboard",
//       "/condidats",
//       "/",
//       "/contact",
//     ];

//     // Vérifie si la route actuelle est protégée
//     const isProtectedRoute = protectedRoutes.some((route) =>
//       pathName.startsWith(route)
//     );

//     // Redirection si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée
//     if (!isAuth && isProtectedRoute) {
//       return NextResponse.redirect(new URL("/auth/signin", request.url));
//     }

//     // Retourne NextResponse.next() pour laisser passer la requête si autorisée
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       async authorized({ req }) {
//         // Ce callback peut être personnalisé pour définir la logique d'autorisation
//         const token = await getToken({ req });
//         return !!token; // Retourne true si l'utilisateur est authentifié
//       },
//     },
//   }
// );

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/auth/:path*",
//     "/api/:path*",
//     "/condidats",
//     "/",
//   ],
// };

// import { NextRequest, NextResponse } from "next/server";
// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();
//   console.log(session);
//   if (!session) {
//     return NextResponse.rewrite(new URL("/login", req.url));
//   }
// }

// // import { getToken } from "next-auth/jwt";
// // import { withAuth } from "next-auth/middleware";
// // import { NextRequest, NextResponse } from "next/server";

// // export default withAuth(
// //   async function middleware(request: NextRequest) {
// //     const pathName = request.nextUrl.pathname;
// //     const isAuth = await getToken({ req: request }); // Récupère le token d'authentification

// //     const protectedRoutes = [
// //       // "/chat/profile",
// //       // "/dashboard",
// //       "/reservations",
// //       // "/",
// //       "/contact",
// //     ];

// //     // Vérifie si la route actuelle est protégée
// //     const isProtectedRoute = protectedRoutes.some((route) =>
// //       pathName.startsWith(route)
// //     );

// //     // Redirection si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée
// //     if (!isAuth && isProtectedRoute) {
// //       return NextResponse.redirect(new URL("/auth/signin", request.url));
// //     }

// //     // Retourne NextResponse.next() pour laisser passer la requête si autorisée
// //     return NextResponse.next();
// //   },
// //   {
// //     callbacks: {
// //       async authorized({ req }) {
// //         // Ce callback peut être personnalisé pour définir la logique d'autorisation
// //         const token = await getToken({ req });
// //         return !!token; // Retourne true si l'utilisateur est authentifié
// //       },
// //     },
// //   }
// // );

export const config = {
  matcher: [
    "/auth/:path*",
    "/api/:path*",
    // "/reservation",
    "/admin",
  ],
};
