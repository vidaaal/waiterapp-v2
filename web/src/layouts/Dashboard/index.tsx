import { Outlet } from 'react-router-dom'
import { SideBar } from './components/Sidebar'

export function Dashboard() {
  return (
    <>
      <SideBar />

      <Outlet />
    </>
  )
}
