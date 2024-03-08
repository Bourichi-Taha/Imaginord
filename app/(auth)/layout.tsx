import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode;
}

const Layout = (props:AuthLayoutProps) => {
    const {children} = props;
  return (
    <main className='auth'>
        {children}
    </main>
  )
}

export default Layout