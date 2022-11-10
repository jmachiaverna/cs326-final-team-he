/**
 * Code for the main feed updates
 */

// class feed {
//     constructor() {
//         // Set default values
//         // Want user info here

//         const response = await fetch("http://localhost:3000/profile");
        
//     }

// }


// /**
//  * Gets profile asyncorhonously for a given user (no params for now)
//  * @return {JSON} Returns Profile JSON
//  */
// async function get_profile() {
//     const response = await fetch("http://localhost:3000/profile");
//     if (response.ok()) {
//         const profileJson = await response.json();
//         return profileJson;
//     }
// }

// /**
//  * Sets the profile using the profile JSON given
//  * @param {JSON} profile_json Input Profile JSON
//  */
// function set_profile(profile_json) {
//     // Need to set up profile, user ID, spotify ID, playlist URL, favorite song URL
//     const sidebar = document.getElementById('sidebar');

//     const profile = sidebar.getElementsByClassName('profile');
//     const user_id = sidebar.getElementsByClassName('user_id');
//     const spotify_id = sidebar.getElementsByClassName('spotify');
//     const playlist = sidebar.getElementsByClassName('playlist');
//     const favorite_song = sidebar.getElementsByClassName('favorite_song');

//     console.log(profile);
    
// }

// // On load call

// const profileJson = await get_profile();
// set_profile(profileJson);