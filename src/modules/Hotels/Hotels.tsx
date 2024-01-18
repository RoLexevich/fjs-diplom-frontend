import "./hotels.scss";
import HotelProfile from "./HotelProfile/HotelProfile";
const Hotels = () => {
    const hotels = [<HotelProfile />, <HotelProfile />, <HotelProfile />];
    return (
        <>
            <div className="hotels">{hotels.map((hotel) => hotel)}</div>
        </>
    );
};

export default Hotels;
