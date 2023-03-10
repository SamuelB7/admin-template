import useAuth from "../../data/hook/useAuth";
import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";


export default function SideMenu() {

    const { logOut } = useAuth()

    return (
        <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900">
            <div className="
                flex flex-col items-center justify-center
                h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800
            ">
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Home" icon={HomeIcon} />
                <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
            </ul>
            <ul>
                <MenuItem onClick={logOut} text="Logout" icon={LogoutIcon} className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white" />
            </ul>
        </aside>
    )
}