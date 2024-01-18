import "./button.scss";

const Button = ({ className, onSubmit, text, loading, disabled }: any) => {
    return (
        <button
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
