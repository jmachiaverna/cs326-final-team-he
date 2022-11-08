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
 * DELETE ENDPOINT
 */