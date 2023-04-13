import {createContext, useContext, useState} from "react";

const UsernameContext = createContext({
    username: '',
    changeUsername: (name) => {
    },
})

export const useUsername = () => {
    const {username, changeUsername} = useContext(UsernameContext)
    return {
        username,
        changeUsername,
    }
}

export const UsernameContextProvider = ({children}) => {
    const [username, setUsername] = useState('')

    const changeUsername = (name) => setUsername(name)

    const value = {
        username,
        changeUsername,
    }

    return (
        <UsernameContext.Provider value={value}>
            {children}
        </UsernameContext.Provider>
    )
}
