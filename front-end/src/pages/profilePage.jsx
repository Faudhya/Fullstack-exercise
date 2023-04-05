import { Navbar } from "../components/navbar";
import Profile from "../components/profile";
import Protection from "../components/protection";

export const ProfilePage = () => {
    const token = localStorage.getItem("token");
    return (
        <div>
            <Navbar />
            {token ? <Profile /> : <Protection />}
        </div>
    );
};
