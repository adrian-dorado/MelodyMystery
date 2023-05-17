export function SpotifyGetUser(accessToken) {
    const profileUrl = 'https://api.spotify.com/v1/me';

    fetch(profileUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error)
        });

}