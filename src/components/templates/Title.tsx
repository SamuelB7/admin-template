interface TitleProps {
    title: string
    caption: string
}

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className="
                
            ">
                {props.title}
            </h1>
            <h2 className="
            
            ">
                {props.caption}
            </h2>
        </div>
    )
}