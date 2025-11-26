import { Outlet } from "react-router-dom";
import { FloatingDock } from "@/components/FloatingDock";

export const Layout = () => {
    return (
        <>
            <FloatingDock />
            <Outlet />
        </>
    );
};
