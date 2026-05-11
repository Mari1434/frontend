import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
    return (
        <div className="flex min-h-screen items-stretch">
            <Sidebar />
        <main className="flex-1 w-full">
            <Outlet />
        </main>
        </div>
    );
}

export default Layout;