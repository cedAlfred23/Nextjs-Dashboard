'use client'
import React, { useState } from 'react'
import {
  ChevronRight,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UserRound,
  } from "lucide-react"
  import { Nav } from './ui/nav'
  import { Button } from './ui/button'
  import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight
  } from '@react-hook/window-size'

type Props = {}

export default function SideNavBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;
  function toggleSideBar(){
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
     {!mobileWidth &&(
      <div className=' absolute right-[-20px] top-7' onClick={toggleSideBar}>
      <Button variant='secondary' className='rounded-full p-2'>
          <ChevronRight></ChevronRight>
        </Button>
     </div>
     )}
         <Nav
            isCollapsed={mobileWidth ? true : isCollapsed}
            links={[
             {
              title: 'Dashboard',
              href: '/',
              icon: LayoutDashboard,
              variant: "default",
             },
             {
              title: 'Users',
              href: '/users',
              icon: UserRound,
              variant: "ghost",
             },
             {
              title: 'Orders',
              href: '/orders',
              icon: ShoppingCart,
              variant: "ghost",
             },
             {
              title: 'Settings',
              href: '/settings',
              icon: Settings,
              variant: "ghost",
             }
            ]}
          />
    </div>
  )
}