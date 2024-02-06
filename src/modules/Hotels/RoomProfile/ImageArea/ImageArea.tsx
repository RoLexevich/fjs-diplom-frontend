import "./imagearea.scss";
const ImageArea = ({ isEditMode = false, src = "#", removeImage }: any) => {
    const backStyle = {
        backgroundImage: `url(${src})`,
    };
    return (
        <>
            {!isEditMode ? (
                <div className="image-area" style={backStyle}></div>
            ) : (
                <div className="image-area" style={backStyle}>
                    <a
                        href="#"
                        className="close"
                        onClick={() => {
                            removeImage();
                        }}
                    ></a>
                </div>
            )}
        </>
    );
};

export default ImageArea;
