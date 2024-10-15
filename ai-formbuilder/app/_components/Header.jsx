import { Button } from '@/components/ui/button'
import React from 'react'

function Header() {
  return (
    <div className='p-5 border-b shadow-sm'>
      <div className='flex items-center justify-between'>
        <div className='text-left'>
          {/* Other header content (e.g., logo, title, etc.) can go here */}
          <h1 className='font-bold'>AI FORM BUILDER</h1>
        </div>
        <div className='text-right'>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
