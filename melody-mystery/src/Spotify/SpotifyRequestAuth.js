import { loginUrl } from "./SpotifyCreds";

export function RequestSpotifyAuthorization() {
    window.location.href = loginUrl;
}