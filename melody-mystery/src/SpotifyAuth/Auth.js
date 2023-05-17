import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    token: null,
    setToken: () => null,
});


export const AuthProvider = ({ children }) => {
    const [spotifyToken, setSpotifyToken] = useState('');

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}