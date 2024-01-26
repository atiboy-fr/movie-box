import { Outlet } from "react-router-dom"


function Layout() {
  return (
    <div className="app">
        <h1>Movie App</h1>
        <Outlet />
    </div>
  )
}

export default Layout