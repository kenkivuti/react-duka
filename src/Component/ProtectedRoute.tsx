import  { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ProtectedRoute() {
    const navigate = useNavigate()
    //hook to perform side effects when the component mounts
    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn')
        // Authentication Check
        if (!loginStatus || loginStatus !== "true") {
            navigate('/Login') //redirecting to login
        }
    }, [navigate])
    return null
}