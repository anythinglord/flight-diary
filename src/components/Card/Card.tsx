import { IconText } from "../IconText/IconText"
import "./styles.css"

interface Props {
    date: string
    weather: string
    visibility: string
    comment: string
}

export const Card = ({ date, weather, visibility, comment }: Props) => {
    return(
        <div className="card">
            <div className="card-date">
                <div className="icon-text">
                    <i className="fa-regular fa-calendar"/>
                    {date}
                </div>
                <button>
                    <i className="fa-solid fa-ellipsis-vertical" />
                </button>
            </div>
            <IconText text={weather} icon="cloud"/>
            <IconText text={visibility} icon="eye"/>
            <IconText text={comment} icon="pen-to-square"/>
        </div>
    )
}