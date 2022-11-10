/**
 * Gets profile asyncorhonously for a given user (no params for now)
 * @return {JSON} Returns Profile JSON
 */
 async function get_profile() {
    const response = await fetch("http://localhost:3000/profile");

    if (response.ok) {
        const profileJson = await response.json();
        return profileJson;
    }
}

/**
 * Sets the profile using the profile JSON given
 * @param {JSON} profile_json Input Profile JSON
 */
function set_profile(profile_json) {
    // Need to set up profile, user ID, spotify ID, playlist URL, favorite song URL
    
    document.getElementById('username').innerHTML = profile_json.user_name;
    document.getElementById('uid').innerHTML = profile_json.user_id;
    document.getElementById('spotify_id').innerHTML = profile_json.spotify_account;
    document.getElementById('list').innerHTML = profile_json.playlist;
    document.getElementById('song').innerHTML = profile_json.favorite_song;

}

// On load call

const profileJson = await get_profile();
set_profile(profileJson);

console.log("FINISHED LOADING");
