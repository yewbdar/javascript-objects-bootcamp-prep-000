let playlist={artist:'song'}
function updatePlaylist(playlist, artist,songTitle){
  playlist[artist]=songTitle;
  return playlist
}
function removeFromPlaylist(obj,name){
   delete obj.name
   return obj
}