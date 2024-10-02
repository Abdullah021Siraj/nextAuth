'use client'
import { useRouter } from 'next/navigation'

export const LoginButton = ({children}) => {
    
    const router = useRouter();
    const onClick = () => {
        router.push('/auth/login')
    }
    
    return(
    <span onClick={onClick} className="cursor-pointer">
        {children}
    </span>
    )
}