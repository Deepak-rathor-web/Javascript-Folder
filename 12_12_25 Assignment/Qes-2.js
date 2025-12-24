var playlist = [];

function addToPlaylist(playlist, songName) {
    playlist.push(songName);
    return playlist;
}

var removeFromPlaylist = function(playlist, songName) {
    return playlist.filter(function(song) {
        return song !== songName;
    });
};

var trendingSongs = ["Kesariya", "Calm Down", "Despacito", "Believer"];

var isTrending = function(songName) {
    return trendingSongs.includes(songName);
};

function calculateDuration(durations, speed = 1) {
    var sum = 0;
    for (var i = 0; i < durations.length; i++) {
        sum += durations[i];
    }
    return sum / speed;
}

function addBulkSongs(playlist, ...songs) {
    for (var i = 0; i < songs.length; i++) {
        playlist.push(songs[i]);
    }
    return playlist;
}


addToPlaylist(playlist, "Kesariya");
addToPlaylist(playlist, "Shape of You");
addToPlaylist(playlist, "Believer");

console.log("Initial Playlist:", playlist);

playlist = removeFromPlaylist(playlist, "Shape of You");
console.log("After Remove:", playlist);

console.log(isTrending("Believer"));
console.log(isTrending("Old Song"));

var totalDuration = calculateDuration([3, 4, 5], 1.5);
console.log(totalDuration);

playlist = addBulkSongs(playlist, "Calm Down", "Levitating", "Bones");
console.log("After Adding Multiple Songs:", playlist);
