import { faker } from '@faker-js/faker';

/**
 * We will be adding APIs on server side here
 */

/**
 * CREATE ENDPOINT
 */


/**
 * READ ENDPOINT
 */


/**
 * Reads profile data of the user
 * Used generally to retreive data regarding the user
 * @return {JSON} Returns json object
 */
function readProfile() {
    return {
        spotify_account: faker.internet.domainName(),
        playlist: faker.internet.domainName(),
        favorite_song: faker.music.songName(),
        favorite_genre: faker.music.genre(),
        favorite_artist: faker.name.fullName(),
        friends: [
            {
                user_name: faker.name.fullName(),
                details: {
                    favorite_song: faker.music.songName(),
                    recent_shared: {
                        shared_song: faker.music.songName()
                    }
                }
            }
        ]
    };
}

/**
 * Reads a specific chirp whenever it is clicked on for more information by a user
 * @return {JSON} Returns json object containing data like content, shared music, like count, comments
 */
function readChirp() {
    return {
        user_name: faker.name.fullName(),
        chirp_text: faker.lorem.paragraph(2),
        shared_song_name: faker.music.songName(),
        shared_song: faker.internet.domainName(),
        like_count: faker.datatype.number(1000),
        share_count: faker.datatype.number(1000)
    };
}


/**
 * UPDATE ENDPOINT
 */

/**
 * 
 * @param {JSON} json: some json to update 
 * @param {string} key: the key in the object to update 
 * @param {*} value: the new value
 * @returns 
 */
function updateJSON(json, key, value) {
    if (!(key in json)) {
        throw new Error('key not in JSON');
    } else {
        json[key] = value;
    }
    return json;
}
/**
 * Updates a specific profile using updateJSON
 * @param {JSON} profile 
 * @param {string} key 
 * @param {*} value 
 */
function updateProfile(profile, key, value) {
    return updateJSON(profile, key, value);
}

/**
 * Updates a specific chirp using updateJSON
 * @param {JSON} chirp: the chirp to update 
 * @param {string} key: the field of the chirp we are updating
 * @param {*} value: the vaue of that we are updating the field to
 * @returns the updated JSON chirp
 */
function updateChirp(chirp, key, value) {
    return updateJSON(chirp, key, value);
}

/**
 * DELETE ENDPOINT
 */

/**
 * Deletes a given json object from the database. If the object does not exist, throws an error
 * @param {JSON[]} database: the database of JSON objects to delete from 
 * @param {JSON} json: the json object to delete
 */
function deleteJSON(database, json) {
    let delSuccess = false;
    database.forEach((obj, i) => {
        if (obj === json) {
            delSuccess = true;
            delete database[i]
        }});
    if (!delSuccess) {
        throw new Error('deletion failed, did not find object json in databse');
    }
}

function deleteProfile(profileDB, profile) {
    deleteJSON(profileDB, profile);
}

function deleteChirp(chirpDB, chirp) {
    deleteJSON(chirpDB, chirp);
}