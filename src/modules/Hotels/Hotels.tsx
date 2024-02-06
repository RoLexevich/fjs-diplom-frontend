import "./hotels.scss";
import HotelProfile from "./HotelProfile/HotelProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHotels } from "@/store/hotelsSlice";
const Hotels = () => {
    const dispatch = useDispatch();
    const hotels = useSelector((state: any) => {
        return state.hotels.hotels;
    });
    useEffect(() => {
        dispatch(fetchHotels(String()) as any);
    }, [dispatch]);
    return (
        <>
            <div className="hotels">{hotels.map((hotel:any, index:number) => <HotelProfile {...hotel} key={index} />)}</div>
        </>
    );
};

export default Hotels;
