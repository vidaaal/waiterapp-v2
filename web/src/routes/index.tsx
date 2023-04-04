import { Routes as Router, Route } from 'react-router-dom'
import { Login } from '../pages/Login'

export function Routes() {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
    </Router>
  )
}
