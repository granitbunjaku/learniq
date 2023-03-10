import React from 'react'
import { createContext } from "react";

export const UserContext = createContext(null);

const UserContext = (props) => {
    return (
        <UConext.Provider>
            {props.children}
        </UConext.Provider>
    )
}

export default UserContext