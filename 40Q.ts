function make_album(artist:string,album_titl:string,num_tracks?:number): Record <string, unknown>{
const album:Record<string, unknown> = {
    artist,
    album_titl
};
if (num_tracks != undefined){
    album.num_tracks = num_tracks;
}
return album
}
const alb1 = make_album("Atif Aslam","New 2024",10)
const alb2 = make_album("Arijit Singh","New 2022",15)
const alb3 = make_album("NFAK","Old is Gold",20)
console.log(alb1)
console.log(alb2)
console.log(alb3)