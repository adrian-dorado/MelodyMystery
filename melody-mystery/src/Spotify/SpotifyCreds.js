export const authEndpoint = 'https://accounts.spotify.com/authorize'

export const clientId = 'af23c74ca8c64f3d91c2447fe60d1457'

export const redirectUri = 'http://localhost:3000'

export const redirectUriCallback = 'http://localhost:5173/callback'

export const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-read-private',
    'user-read-email',
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&scope=${scopes.join('%20')}&redirect_uri=${redirectUri}&show_dialog=true`
