import Button from "@/components/Button/Button";
import "./users.scss";
import UserTable from "./table/UserTable";

const Users = ()=> {
    return (
        <>
            <div className="users">
                <div className="user-title">Пользователи </div>
                <input
                    className="user-input"
                    name="exampleInput"
                    placeholder="Введите имя пользователя, id, телефон или почту"
                    min={2}
                />
                <Button
                    onSubmit={() => {}}
                    text={"искать224442"}
                    loading={true}
                />
                <UserTable></UserTable>
            </div>
        </>
    );
}

export default Users;
