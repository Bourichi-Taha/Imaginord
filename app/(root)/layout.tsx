import MobileNav from '@/components/shared/MobileNav';
import Sidebar from '@/components/shared/Sidebar';
import React from 'react'

interface RootLayoutProps {
    children: React.ReactNode;
}

const Layout = (props: RootLayoutProps) => {
    const { children } = props;
    return (
        <main className='root'>
            <Sidebar/>
            <MobileNav />
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout