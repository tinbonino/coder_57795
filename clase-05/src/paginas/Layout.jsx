import { Link, Outlet } from "react-router-dom"
function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"blog"}>Blog</Link>
                </li>
                <li>
                    <Link to={"productos"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/eventos"}>Eventos</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout