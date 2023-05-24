import {useDocumentTitle} from "../shared/hooks/documentTitle/useDocumentTitle";
import {useEffect} from "react";
import Login from "../components/Auth/Login";
import Cookies from "js-cookie";

export default function LoginPage() {
    useDocumentTitle("Login")

    useEffect(() => {
        const token = Cookies.get("_jwtToken");
        console.log(token);
        if (token) {
            window.location = "/admin/dashboard";
        }
    }, [])

    return (
        <div>
            <Login/>
        </div>
    )
}