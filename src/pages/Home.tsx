import { FC } from "react";
import { ExcelContainer } from "../components/Excel/ExcelContainer";
import { Header } from "../components/Header/Header";

export const Home:FC = () => {
    return (
        <div>
            <Header />
            <ExcelContainer />
        </div>
    )
}