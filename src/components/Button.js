import "./Button.css";

function Button({ onClick: handleClick, value }) {
    return ( <
        button className = "buttoncss"
        onClick = { handleClick } > { value } < /button>
    );
}
export default Button;