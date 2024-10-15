// Accessible for public who aren't logged in

export const publicRoutes = [
    '/',
    '/auth/new-verification',
]

// these routes will redirect login user to /settings

export const authRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/error',
    '/auth/reset',
    '/auth/new-password'
]

//routes for API authentication purposes

export const apiAuthPrefix = '/api/auth'


// path that redirect after login 

export const DEFAULT_LOGIN_REDIRECT = '/settings'