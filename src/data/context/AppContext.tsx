import { createContext, useState } from "react";

type Theme = 'dark' | ''

interface AppContextProps {
    theme?: Theme
    changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
    theme: null,
    changeTheme: null
})

export function AppProvider(props) {
    const [theme, setTheme] = useState<Theme>('dark')

    function changeTheme() {
        if(theme === '') {
            setTheme('dark')
        } else {
            setTheme('')
        }
    }

    return (
        <AppContext.Provider value={{
            theme,
            changeTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext