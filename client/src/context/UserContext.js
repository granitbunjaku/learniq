import React from 'react'

export const UConext = React.createContext({});

const UserContext = (props) => {
    return (
        <UConext.Provider>
            {props.children}
        </UConext.Provider>
    )
}

export default UserContext