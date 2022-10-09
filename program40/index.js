function make_album(artist_name,album_title,no_of_tracks = 0) {
    let album = {};
    album.artist_name = artist_name;
    album.title = album_title;
    if(no_of_tracks != 0) {
        album.no_of_tracks = no_of_tracks;
    }
    return album;
}

let albums = [];
albums.push(make_album("One Direction","Yo Yo"));
console.log(albums);
albums.push(make_album("Atif","Aadaat",9));
console.log(albums);
albums.push(make_album("Arjit","Samma"));
console.log(albums);