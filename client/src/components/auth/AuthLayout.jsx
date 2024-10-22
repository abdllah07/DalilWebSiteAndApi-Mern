import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full items-center justify-evenly flex-wrap">
            <div className="flex min-h-screen flex-1 items-center justify-center bg-background px-4 ">
                <Outlet />
            </div>
            <div className="bg-[#ffeea90a] min-h-screen flex items-center p-10">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592_640.png" alt="" 
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}

export default AuthLayout