import Content from "./Content"
import Header from "./Header"
import SideMenu from "./SideMenu"

interface LayoutProps {
    title: string
    caption: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <SideMenu />
            <Header title={props.title} caption={props.caption}/>
            <Content>
                {props.children}
            </Content>
        </div>
    )
}