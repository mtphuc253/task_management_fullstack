import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/Admin/Dashboard'
import UserDashboard from './pages/User/Dashboard'
import MyTasks from './pages/User/MyTasks'


import ManageTasks from './pages/Admin/ManageTasks'
import CreateTask from './pages/Admin/CreateTask'
import ManageUsers from './pages/Admin/ManageUsers'
import ViewTaskDetails from './pages/User/ViewTaskDetails'

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Admin Routes */}

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/* User Routes */}

          <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/my-tasks" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App