"use client";
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-5 border-b shadow-sm'>
            <div className='flex items-center justify-between'>
                <div className='text-left'>
                   
                    <h1 className='font-bold'>AI FORM BUILDER</h1>
                </div>
                {isSignedIn ? (
                    <div className='flex items-center gap-5'>
                        <Link href={'/dashboard'}>
                            <Button variant="outline">Dashboard</Button>
                        </Link>
                        <UserButton />
                        <div className='text-right'>
                            <Link href={'/get-started'}>
                                <Button>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className='text-right'>
                        <SignInButton>
                            <Button>Sign In</Button>
                        </SignInButton>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
