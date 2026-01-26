// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// type AuthUser = {
//   user_id: string;
//   role?: string;
//   email?: string;
//   [key: string]: any;
// };

// export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const authHeader = req.headers['authorization'];
//     let token: string | null =
//       typeof authHeader === 'string' && authHeader.startsWith('Bearer ')
//         ? authHeader.split(' ')[1]
//         : null;

//     // ✅ Fallback cookie
//     if (!token && (req as any).cookies?.accessToken) {
//       token = (req as any).cookies.accessToken;
//     }

//     if (!token) {
//       return res.status(401).json({ error: 'Missing or invalid Authorization header' });
//     }

//     if (!process.env.JWT_SECRET) {
//       throw new Error('JWT_SECRET is not set in environment variables');
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload | string;

//     if (decoded && typeof decoded === 'object') {
//       (req as any).user = decoded as AuthUser;
//       return next();
//     }

//     return res.status(401).json({ error: 'Invalid token payload' });
//   } catch (err: any) {
//     console.error('Auth error:', err?.message || err);
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
// };


import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

type AuthUser = {
  user_id: string;
  role?: string;
  email?: string;
  [key: string]: any;
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("🧪 AUTH MIDDLEWARE HIT");
  console.log("🧪 Authorization header:", req.headers.authorization);

  try {
    let token: string | null = null;

    // ✅ PRIMARY: Bearer token
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    console.log("🧪 Extracted token:", token ? token.substring(0, 20) + "..." : "NONE");

    if (!token) {
      console.error("❌ No token provided");
      return res.status(401).json({ error: "Unauthorized: token missing" });
    }

    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET missing");
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as AuthUser;

    console.log("🧪 Decoded token payload:", decoded);

    // ✅ Attach user
    (req as any).user = decoded;

    console.log("✅ Authenticated user_id:", decoded.user_id);

    next();
  } catch (err: any) {
    console.error("❌ JWT verification failed:", err.message);
    return res.status(401).json({ error: "Unauthorized: invalid token" });
  }
}