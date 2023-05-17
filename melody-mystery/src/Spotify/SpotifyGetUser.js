import axios from 'axios';
import { SpotifyContext } from '../App';
import { useContext } from 'react';

export const SpotifyGetUser = async (spotifyToken) => {
    // e.preventDefault()

    // const [spotifyUser, setSpotifyUser] = useContext(SpotifyContext);

    const profileUrl = 'https://api.spotify.com/v1/me';

    const { data } = await axios.get(profileUrl, {
        headers: {
            'Authorization': `Bearer ${spotifyToken}`
        }
    })

    // setSpotifyUser(data.user.items)
    // console.log(spotifyUser);
}