import { useContext, useEffect, createContext, useState } from "react";

// export const TokenContext = createContext();

let internalToken = null;

export const getToken = () => internalToken;

export const AuthContext = createContext({
    spotifyToken: null,
    setSpotifyToken: () => null,
});


export const AuthProvider = ({ children }) => {
    const [spotifyToken, setSpotifyToken] = useState(null);

    return (
        <AuthContext.Provider value={{ spotifyToken, setSpotifyToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);


export const useToken = () => {
    
    const { spotifyToken, setSpotifyToken } = useAuthContext();
    
    useEffect(() => {
        async function fetchToken() {
            // const token = await spotifyGetToken();
            // setSpotifyToken(token);
            const hash = window.location.hash;
            let token = window.localStorage.getItem('token');
            
            if (!token && hash) {
                token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
                
                window.location.hash = ''
                window.localStorage.setItem('token', token)
            }
            
            internalToken = token
        }
        if (!spotifyToken) {
            fetchToken();
        }
    }, [spotifyToken, setSpotifyToken])
    
    const login = async () => {
        const token = internalToken;
        setSpotifyToken(token);
        return;
    }
    
    const logout = async () => {
        setSpotifyToken('')
        window.localStorage.removeItem('token')
    }
    
    return [login, logout]
}

// export async function spotifyGetToken() {

//     useEffect(() => {
//         const hash = window.location.hash;
//         let token = window.localStorage.getItem('token');

//         if (!token && hash) {
//             token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

//             window.location.hash = ''
//             window.localStorage.setItem('token', token)
//         }

//         internalToken = token
//     }, [])
//     console.log(internalToken);
// }