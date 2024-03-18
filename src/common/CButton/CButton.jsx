import "./CButton.css";

export const CButton = ({className, title, functionEmit}) => {

    return (
        <div className={className} onClick={functionEmit}>
            {title}
        </div>
    )
}