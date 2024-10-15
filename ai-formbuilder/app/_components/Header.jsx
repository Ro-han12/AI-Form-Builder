"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-5 border-b shadow-sm'>
            <div className='flex items-center justify-between'>
                <div className='text-left'>
                    {/* Other header content (e.g., logo, title, etc.) can go here */}
                    <h1 className='font-bold'>AI FORM BUILDER</h1>
                </div>
                {isSignedIn ? (
                    <div className='flex items-center gap-5'>
                        <Button variant="outline">Dashboard</Button>
                        <UserButton />
                        <div className='text-right'>
                            <Button>Get Started</Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Header;
