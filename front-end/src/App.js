import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/error";
import { HomePage } from "./pages/home";
import { LoginForm } from "./pages/login";
import { RegistrationForm } from "./pages/register";
import { ProfilePage } from "./pages/profilePage";
import { AdminForm } from "./pages/adminForm";
import Admin from "./pages/admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    { path: "/login", element: <LoginForm /> },
    { path: "/register", element: <RegistrationForm /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/admin", element: <Admin /> },
    { path: "/adminForm", element: <AdminForm /> },
]);

function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
