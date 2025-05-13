import './index.css'

export const Intro = (props) => {
    return (
        <div className="intro">
            <h2 className="site-title">{props.heading}</h2>
            <p>{props.text}</p>
        </div>
    )
}
