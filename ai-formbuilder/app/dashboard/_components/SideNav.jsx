import { LibraryBig, LineChart, MessageSquare, Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { Button } from '@/components/ui/button';

function SideNav() {
    const menuList = [
        {
            id: 1,
            name: 'My Forms',
            icon: LibraryBig,
            path: '/dashboard',
        },
        {
            id: 2,
            name: 'Responses',
            icon: MessageSquare,
            path: '/dashboard/responses',
        },
        {
            id: 3,
            name: 'Analytics',
            icon: LineChart,
            path: '/dashboard/analytics',
        },
        {
            id: 4,
            name: 'Upgrade',
            icon: Shield,
            path: '/dashboard/upgrade',
        },
    ];

    const path = usePathname();

    useEffect(() => {
        // console.log(path);
    }, [path]);

    return (
        <div className='h-screen shadow-md border'>
            <div className='p-4'>
                {menuList.map((menu, index) => (
                    <h2
                        key={index}
                        className={`flex items-center gap-2 p-3 mb-2 text-sm
                        hover:bg-primary hover:text-white rounded-lg cursor-pointer 
                        ${path === menu.path && 'bg-primary text-white'}`}
                    >
                        <menu.icon className='w-5 h-5' />
                        {menu.name}
                    </h2>
                ))}
            </div>
            <div className='fixed bottom-5 p-4 w-48'>
                <Button className='w-full text-sm py-2'>Create Form</Button>
                <div className='my-4'>
                    {/* Ensure progress bar visibility with styles */}
                    <Progress.Root 
                      className='relative h-2 bg-gray-300 rounded-full overflow-hidden'
                      value={33}
                      style={{ width: '100%' }}
                    >
                        <Progress.Indicator
                            className='bg-blue-500 h-full transition-all duration-500 ease-in-out'
                            style={{ width: '33%' }} // Dynamic based on the value
                        />
                    </Progress.Root>
                    <h2 className='text-xs mt-2 text-gray-600'>
                        <strong>2</strong> out of <strong>3</strong> Forms Created
                    </h2>
                    <h2 className='text-xs mt-1 text-gray-600'>
                        Upgrade for Unlimited Form Creation
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
