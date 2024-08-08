

import MobileNav from '@/components/shared/MobileNav'
import Sidebare from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebare />
      <MobileNav />
        <div className='root-container'>
        <div className='wrapper'>
          
        {children}
        </div>
        </div>
        </main>
  )
}

export default Layout