import DataTable, { TableColumn } from "react-data-table-component";
import './usertable.scss'

type DataRow = {
    id: number;
    fio: string;
    phone: string;
    email: string;
};
const columns: TableColumn<DataRow>[] = [
    {
        name: "ID",
        width: '60px',
        selector: (row: DataRow) => row.id,
    },
    {
        name: "ФИО",
        selector: (row: DataRow) => row.fio,
    },
    {
        name: "Телефон",
        selector: (row: DataRow) => row.phone,
    },
    {
        name: "Email",
        selector: (row: DataRow) => row.email,
    },
];

const data = [
    {
        id: 1,
        fio: "Симоненко Татьяна ",
        phone: "+79112306460",
        email: "tatyana.simonenko@gmail.com",
    },
    {
        id: 2,
        fio: "Симоненко Татьяна2 ",
        phone: "+79112306460",
        email: "tatyana.simonenko@gmail.com",
    },
    {
        id: 3,
        fio: "Симоненко Татьяна 3",
        phone: "+79112306460",
        email: "tatyana.simonenko@gmail.com",
    },
    {
        id: 4,
        fio: "Симоненко Татьяна 5",
        phone: "+79112306460",
        email: "tatyana.simonenko@gmail.com",
    },
];

export default function UserTable() {
    return <DataTable columns={columns} data={data} className="user-table" />;
}
