import Button from "../../components/button/Button";
import "./users.scss";
import UserTable from "./table/UserTable";
export default function Users() {
    return (
        <>
            <div className="users">
                <div className="user-title">Пользователи </div>
                <Button
                    onSubmit={() => {}}
                    text={"adsfasfdasdf"}
                    loading={true}
                />
                <Button
                    onSubmit={() => {}}
                    text={"искать"}
                    loading={false}
                    disabled={true}
                />
                <Button
                    onSubmit={() => {}}
                    className={"save-button"}
                    text={"искать2222"}
                    loading={false}
                />
                 <Button
                    onSubmit={() => {}}
                    className={"edit-button"}
                    text={"искать2222"}
                    loading={false}
                />
                <Button
                    onSubmit={() => {}}
                    className={"cancel-button"}
                    text={"искать2222"}
                    loading={false}
                />
                <UserTable></UserTable>
            </div>
        </>
    );
}
