"use client";
import React, { createContext, useState } from "react";

const handleUserBoxShow = (value) => {
    setShowUserBox(value);
};

export const UserBoxContext_ = createContext([false, handleUserBoxShow]);

function UserBoxContext({ children }) {
    const [showUserBox, setShowUserBox] = useState(false);
    return (
        <UserBoxContext_.Provider value={{ showUserBox, setShowUserBox }}>
            {children}
        </UserBoxContext_.Provider>
    );
}

export default UserBoxContext;
