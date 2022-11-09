const faker = require ('@faker-js/faker');

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
function getProfile() {
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
function getChirp() {
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
 * Function representing the put functionality of REST api. Idempotent, creates new object if id does not exist, 
 * updates existing one if it does.
 * 
 * @param {JSON[]} database the database we're putting obj with id into
 * @param {number} id the id (key) of the object we're updating
 * @param {JSON} obj the data with updated content
 * @returns a response code based on what the result was. 200 for update, 202 for creation
 */
function putJSON(database, id, obj) {
    //if object does not exist in database yet, create it
    const index = database.findIndex(elem => elem['id'] === id);
    let code = 200;
    if (index === -1) {
        console.log('created new object with id: ' + id);
        database.push({'id': id, 'json': json});
        code = 202;
    } else {
        database[i]['id']['json'] = obj;
    }

    return code;
}
/**
 * Updates a specific profile using putJSON
 * @param {JSON[]} profileDB: database of profiles
 * @param {number} id: id of specific profile
 * @param {JSON} profile: the updated profile content
 * @returns: response code based on result
 */
function putProfile(profileDB, id, profile) {
    return putJSON(profileDB, id, profile);
}

/**
 * Updates a specific chirp using putJSON
 * @param {JSON[]} profileDB: database of chirps
 * @param {number} id: id of specific chirp
 * @param {JSON} profile: the updated chirp content
 * @returns: response code based on result
 */
function putChirp(chirpDB, id, chirp) {
    return putJSON(chirpDB, id, chirp);
}

/**
 * DELETE ENDPOINT
 */

/**
 * Deletes a given json object from the database. If the object does not exist, throws an error
 * @param {JSON[]} database: the database of JSON objects to delete from 
 * @param {number} id: the id of the object you want to delete
 * @returns: the corresponding code (whether the delete was successful or not)
 */
function deleteJSON(database, id) {
    let code = database.findIndex(elem => elem['id'] === id);
    if (code === -1) {
        return code;
    } else {
        database.splice(code, 1);
        code = 200;
    }
    return code;
}

/**
 * Deletes a profile with id using
 * @param {JSON[]} profileDB: the database of profiles to delete from 
 * @param {number} id: the id of the profile you want to delete
 * @returns: the corresponding code (whether the delete was successful or not)
 */
function deleteProfile(profileDB, id) {
    return deleteJSON(profileDB, id);
}

/**
 * 
 * @param {JSON[]} chirpDB: the database of chirps to delete from 
 * @param {number} id: the id of the chirp 
 * @returns: corresponding response code
 */
function deleteChirp(chirpDB, id) {
    return deleteJSON(chirpDB, id);
}



/**
 * Server calls
 */

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.post('/', (req, res) => {
    res.send("Got a POST request");
});

app.put('/', (req, res) => {
    res.send("Got a PUT request at /user");
});

app.delete('/', (req, res) => {
    res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})