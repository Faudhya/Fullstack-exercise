import { Navbar } from "../components/navbar";
import Protection from "../components/protection";
import { AdminFormContent } from "../components/adminFormContent";
import { useSelector } from "react-redux";

export const AdminForm = () => {
    const { isAdmin } = useSelector((state) => state.userSlice.value);
    return (
        <div>
            <Navbar />
            {isAdmin ? <AdminFormContent /> : <Protection />}
        </div>
    );
};
