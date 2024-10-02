import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")); // Parse the JSON string
    const [user, setUser] = useState(userInfo); // Now userInfo is an object
    const login = (user) => {
        setUser(user);
    }
    const logout = () => {
        console.log("Logging out..."); // Debugging line
        localStorage.removeItem("userInfo"); // Remove userInfo from localStorage
        setUser(null); // Update user state
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
