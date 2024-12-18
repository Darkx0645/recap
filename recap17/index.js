let songs = [];
for (let i = 0; i < 5; i++) {
  let song = prompt(`Ingrese el nombre de la canción ${i + 1}:`);
  let artist = prompt(`Ingrese el artista de la canción ${i + 1}:`);
  songs.push({ song: song, artist: artist });
}
alert(JSON.stringify(songs));
