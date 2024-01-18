import Button from "@/components/Button/Button";
import "./hotelprofile.scss";
import ImageArea from "./ImageArea/ImageArea";
import Hotel1 from "@/resources/images/hotels/hotel1.jpg";
import Hotel2 from "@/resources/images/hotels/hotel2.jpg";
import Hotel3 from "@/resources/images/hotels/hotel3.jpg";

import { useState } from "react";
const HotelProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const imgList = [Hotel1, Hotel2, Hotel3];
    const [images, setImages] = useState(imgList);

    const removeImage = (id: number) => {
        setImages(
            images.filter((img, ind) => {
                return ind !== id;
            }),
        );
    };

    return (
        <>
            {!isEdit ? (
                <div className="hotel-profile">
                    <div className="hotel-image-container">
                        {images.map((img, index) => (
                            <ImageArea src={img} key={index} />
                        ))}
                    </div>
                    <div className="hotel-profile-content">
                        <div className="hotel-profile-content-title">
                            Название отеля
                        </div>
                        <div className="hotel-profile-content-text">
                            Описание отеля описание отеля опис ание отеля
                            описание отеля опис ание отеля опис ание отеля опис
                            ание отеля опис ание отеля опис ание отеля описа ние
                            отеля опис ание отеля описание отеля описание отеля
                            Описание отеля описание отеля опис ание отеля
                            описание отеля опис ание отеля опис ание отеля опис
                            ание отеля опис ание отеля опис ание отеля описа ние
                            отеля опис ание отеля описание отеля описание отеля
                            отеля описание отеля Описание отеля описание отеля
                            опис ание отеля описание отеля опис ание отеля опис
                            ание отеля опис ание отеля опис ание отеля опис ание
                            отеля описа ние оте
                        </div>
                    </div>
                    <div className="hotel-profile-buttons">
                        <Button
                            className="edit-button"
                            onSubmit={() => {
                                setIsEdit(true);
                            }}
                            text={"Редактировать"}
                        />
                        <Button onSubmit={() => {}} text={"Добавить номер"} />
                    </div>
                </div>
            ) : (
                <div className="hotel-profile">
                    <div className="hotel-image-container">
                        {images.map((img, index) => (
                            <ImageArea
                                src={img}
                                removeImage={() => {
                                    removeImage(index);
                                }}
                                key={index}
                                isEditMode={isEdit}
                            />
                        ))}
                        <Button className="plus-image-button" />
                    </div>

                    <div className="hotel-profile-edit-content">
                        <div>
                            <label>
                                <div>Название отеля</div>
                                <input name="hotel" />
                            </label>
                        </div>

                        <div>
                            <label>
                                <div>Описание отеля</div>
                                <textarea name="hotel" />
                            </label>
                        </div>
                    </div>
                    <div className="hotel-profile-buttons">
                        <Button
                            className="save-button"
                            onSubmit={() => {}}
                            text={"Сохранить"}
                        />
                        <Button
                            className="cancel-button"
                            onSubmit={() => {
                                setIsEdit(false);
                            }}
                            text={"Отмена"}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default HotelProfile;
