import Button from "@/components/Button/Button";
import "./hotelprofile.scss";

import { useState } from "react";
type HotelProfileProps = {
    title: string;
    description: string;
};
const HotelProfile = ({ title, description }: HotelProfileProps) => {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            <div className="hotel-profile">
                <div className="hotel-profile-content">
                    <div className="hotel-profile-content-title">{title}</div>
                    <div className="hotel-profile-content-text">
                        {description}
                    </div>
                </div>
                <div className="hotel-profile-buttons">
                    <Button onSubmit={() => {}} text={"Подробнее"} />
                </div>
            </div>
        </>
    );
};

export default HotelProfile;
