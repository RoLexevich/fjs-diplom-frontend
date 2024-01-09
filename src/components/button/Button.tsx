import { ReactComponent as Loader } from "../../resources/images/loader.svg";
import "./button.scss";

const Button = ({ className, onSubmit, text, loading, disabled }: any) => {
    console.log(className)
    return (
        <button
            className={className || "main-button"}
            disabled={disabled}
            onClick={disabled || loading ? onSubmit : null}
        >
            {text} {!loading ? String() : <span className="loader"></span>}
        </button>
    );
};

export default Button;
