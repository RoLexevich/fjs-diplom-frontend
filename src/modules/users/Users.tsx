import Button from "@/components/Button/Button";
import "./users.scss";
import UserTable from "./table/UserTable";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "@/store/usersSlice";

const Users = () => {
    const dispatch = useDispatch();
    const [searchStr, setSearchStr] = useState(String());
    useEffect(() => {
        dispatch(fetchUsers(String()) as any);
    }, [dispatch]);
    return (
        <>
            <div className="users">
                <div className="user-title">Пользователи </div>
                <input
                    className="user-input"
                    name="exampleInput"
                    value={searchStr}
                    onChange={e => setSearchStr(e.target.value)}
                    placeholder="Введите имя пользователя, телефон или почту"
                    min={2}
                />
                <Button
                    onSubmit={() => {
                        dispatch(fetchUsers(searchStr) as any);
                    }}
                    text={"искать"}
                />
                <UserTable></UserTable>
            </div>
        </>
    );
};

export default Users;
