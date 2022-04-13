const Button = ({buttonText,className}) => {
    return (
        <button 
        type="button"
        className={className}
        >{buttonText}</button>
    )
}
export default Button;