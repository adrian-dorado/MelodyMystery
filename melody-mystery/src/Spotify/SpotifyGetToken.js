import { useContext } from "react";

export function SpotifyGetToken() {

    const [spotifyToken, getSpotifyToken] = useContext(SpotifyContext)

    const hashParams = {};
    const regex = /([^&;=]+)=?([^&;]*)/g;
    const query = window.location.hash.substring(1);

    let match;

    while (match = regex.exec(query)) {
        hashParams[match[1]] = decodeURIComponent(match[2]);
    }

    return hashParams.access_token;

}