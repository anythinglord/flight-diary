interface Props {
    text: string
    icon: string
}

export const IconText = ({ text, icon }: Props) => {
    return(
        <div className="icon-text">
            <i className={`fa-solid fa-${icon}`}/>
            {text}
        </div>
    )
}