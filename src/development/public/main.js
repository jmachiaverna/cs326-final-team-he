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
 * Gets chirps from friends within relatively recent timespan and displays it
 * @return {JSON} Returns Chirp JSON
 */
async function get_feed() {
    const response = await fetch("http://localhost:3000/chirp");

    if (response.ok) {
        const chirpJson = await response.json();
        return chirpJson;
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

    document.getElementById('f1_user_name').innerHTML = profileJson.friends[0].user_name;
    // document.getElementById('f1_uid').innerHTML = profileJson.friends[0].user_id; // TODO: Update USERID too
    document.getElementById('f1_song').innerHTML = profileJson.friends[0].favorite_song;
}

/**
 * 
 * @param {JSON} chirp_json 
 */
function set_feed(chirp_json) {
    // Need to set up the feed
    // Right now we update using the ids of specific fields but that really isn't scalable for chirps and friends list. 
    // Need to figure out a way to efficiently update the fields

    console.log(chirp_json);

    document.getElementById("u1_user_name").innerHTML = chirp_json.user_name;
    document.getElementById("u1_chirp").innerHTML = chirp_json.chirp_text;
}

function add_friend(profile_json, friend_json) {
    const friend =             
    {
        user_name: friend_json.user_name,
        user_id: friend_json.user_id,
        favorite_song: friend_json.favorite_song,
        recent_shared: {
            shared_song: faker.faker.music.songName()
        }
    }
    profile_json.friends.push(friend);
    set_profile(profile_json);
}
// On load call

const profileJson = await get_profile();
const friendJson = await get_profile();
set_profile(profileJson);

const feedJson = await get_feed();
set_feed(feedJson);
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => )
console.log("FINISHED LOADING");
