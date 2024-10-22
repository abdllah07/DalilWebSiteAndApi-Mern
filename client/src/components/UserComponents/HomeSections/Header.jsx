import { HousePlug, LogOut, Menu, Plus, UserCog } from "lucide-react"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { shoppingViewHeaderMenuItems } from "@/config"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { logoutUser } from "@/store/authSlice"


function MenuItems (){
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();


    function handleNavigateToListingPage(getCurrentMenuItem){
        sessionStorage.removeItem('filters');
        const currentFilter = getCurrentMenuItem.id !== 'home'  && getCurrentMenuItem.id !== 'products' && getCurrentMenuItem.id !== 'search'? {
            category: [getCurrentMenuItem.id], 
        } : null

        sessionStorage.setItem('filters' , JSON.stringify(currentFilter));
        location.pathname.includes('listing') && currentFilter !== null ? setSearchParams(new URLSearchParams(`?category=${getCurrentMenuItem.id}`)) : 
        navigate(getCurrentMenuItem.path)
    }

    return <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {
            shoppingViewHeaderMenuItems.map(menuItem => <label className="text-bold font-medium cursor-pointer" onClick={() => handleNavigateToListingPage(menuItem) } key = {menuItem.id}>{menuItem.label}</label>)
        }
        <Button className=" bg-secondary w-[200px] flex items-center gap-1 text-bold">
            <Plus className="text-primary"/>
           <span className="text-primary"> Add Your Job </span>
        </Button>

    </nav>
}


function HeaderRightContent(){

    const {  user} = useSelector(state=> state.auth);   
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout(){
        dispatch(logoutUser())
    }


    return <div className="sticky flex lg:items-center lg:flex-row flex-col gap-4">
    
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="bg-black ">
                        <AvatarFallback className="bg-secondary text-primary cursor-pointer font-extrabold">
                            {user?.userName[0].toUpperCase()}
                        </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
                <DropdownMenuLabel>
                    Logged in as {user?.userName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick = {() => navigate('/shopping/account')}>
                    <UserCog className="mr-2 w-4 h-4"/>
                    Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 w-4 h-4"/>
                    LogOut
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}

function Header() {

    return <header className="sticky top-0 w-full text-primary  bg-[#05080e]">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <Link to ="/shopping/home" className="flex items-center gap-2">
                <HousePlug className="h-6 w-6"/>
                <span className="font-bold">D-Ail</span>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant= "outline" size="icon" className="lg:hidden bg-secondary border-none">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle header menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side= "left" className="w-full max-w-xs">

                <MenuItems/>
                <HeaderRightContent/>

                </SheetContent>
            </Sheet>
            <div className="hidden lg:block ">
                <MenuItems/>
                </div>
                    <div className="hidden lg:block">
                        <HeaderRightContent/>
                    </div>

        </div>
    </header>
}

export default Header