// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); // Token
    const [role, setRole] = useState(null); // User Role

    const login = (token, userRole) => {
        setAuth(token);
        setRole(userRole);
        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);
    };

    const logout = () => {
        setAuth(null);
        setRole(null);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{ auth, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

