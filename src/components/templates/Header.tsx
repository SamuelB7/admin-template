import useAppData from "../../data/hook/useAppData"
import ChangeThemeBtn from "./ChangeThemeBtn"
import Title from "./Title"

interface HeaderProps {
    title: string
    caption: string
}

export default function Header(props: HeaderProps) {
    const { theme, changeTheme } = useAppData()

    return (
        <div className={`flex`}>
            <Title title={props.title} caption={props.caption}/>
            <div className={`flex flex-grow justify-end`}>
                <ChangeThemeBtn theme={theme} changeTheme={changeTheme}/>
            </div>
        </div>
    )
}