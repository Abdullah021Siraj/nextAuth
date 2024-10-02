'use client'

import { Button } from "../ui/button"
import Link from "next/link"

export const BackButton = ({href, label}) =>{
    return(
        <Button
        variant='link'
        className='font-normal w-full'
        size = 'sm'
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}