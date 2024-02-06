import DataTable, { TableColumn } from "react-data-table-component";
import "./usertable.scss";
import { useSelector } from "react-redux";

type DataRow = {
    id: number;
    name: string;
    contactPhone: string;
    email: string;
};
const columns: TableColumn<DataRow>[] = [
    {
        name: "ID",
        width: "60px",
        selector: (row: DataRow) => row.id,
    },
    {
        name: "ФИО",
        selector: (row: DataRow) => row.name,
    },
    {
        name: "Телефон",
        selector: (row: DataRow) => row.contactPhone,
    },
    {
        name: "Email",
        selector: (row: DataRow) => row.email,
    },
];

const UserTable = () => {
    const data = useSelector((state: any) => {
        return state.users.users;
    });
    return (
        <>
           
            <DataTable columns={columns} data={data} className="user-table" />
        </>
    );
};

export default UserTable;
