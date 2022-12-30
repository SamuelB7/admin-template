import { MoonIcon, SunIcon } from "../icons"

interface ChangeThemeBtn {
    theme: string
    changeTheme: () => void
}

export default function ChangeThemeBtn(props: ChangeThemeBtn) {
    if(props.theme === 'dark') {
        return (
            <div onClick={props.changeTheme} className={`
                hidden sm:flex items-center cursor-pointer
                bg-gradient-to-r from-yellow-300 to bg-yellow-600
                w-14 lg:w-24 h-8 p-1 rounded-full
            `}>
                <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
                    {SunIcon()}
                </div>
                <div className={`hidden lg:flex items-center ml-4 text-white`}>
                    <span className={`text-sm`}>Light</span>
                </div>
            </div>
        )
    } else {
        return (
            <div onClick={props.changeTheme} className={`
                hidden sm:flex items-center justify-end cursor-pointer
                bg-gradient-to-r from-gray-500 to bg-gray-900
                w-14 lg:w-24 h-8 p-1 rounded-full
            `}>
                <div className={`hidden lg:flex items-center mr-4 text-gray-300`}>
                    <span className={`text-sm`}>Dark</span>
                </div>
                <div className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}>
                    {MoonIcon('w-4 h-4')}
                </div>
            </div>
        )
    }
}