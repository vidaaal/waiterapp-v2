import { Routes as Router, Route } from 'react-router-dom'
import { Dashboard } from '../layouts/Dashboard'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Menu } from '../pages/Menu'
import { Orders } from '../pages/Orders'
import { Users } from '../pages/Users'

export function Routes() {
  return (
    <Router>
      <Route path="/login" element={<Login />} />

      <Route element={<Dashboard />}>
        <Route path="/home" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Router>
  )
}
