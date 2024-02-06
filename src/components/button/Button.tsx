import { useRef } from "react";
import "./button.scss";

const Button = ({ className, onSubmit, text, loading, disabled }: any) => {
    const ref = useRef(null);
    return (
        <button ref={ref}
            className={className || "search-button"}
            disabled={disabled}
            
            onClick={()=>{
                if(!disabled && !loading){
                    onSubmit();
                }
            }}
        >
            {text} {!loading ? String() : <span className="loader"></span>}
        </button>
    );
};

export default Button;
