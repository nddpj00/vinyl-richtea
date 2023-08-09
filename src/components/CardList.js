import { React, useState, useEffect } from "react";

import "./CardList.css";
import AlbumCard from "./AlbumCard";
import nevermind from "../assets/nirvananevermindalbumcover.jpg";
import masterpieces from "../assets/bobdylanmasterpieces.jpg";
import kindofblue from "../assets/milesdaviskindofblue.jpg";
import bitchesbrew from "../assets/bitchesbrew.jpg";

const dummyAlbumInfo = [
  {
    artist: "Bob Dylan",
    album: "Masterpieces",
    description: "A good gatefold album",
    id: 1,
    release_date: "24/03/1978",
    added_date: "29/03/1996",
    image: masterpieces,
    track_listing: [
      {
        track_no: 1,
        trackName: "Mr. Tambourine Man",
        trackArtist: "Bob Dylan",
      },
      { track_no: 2, trackName: "She Belongs to Me", trackArtist: "Bob Dylan" },
    ],
  },
  {
    artist: "Nirvana",
    album: "Nevermind",
    description: "Fabbo",
    id: 2,
    release_date: "24/09/1991",
    added_date: "29/03/1996",
    image: nevermind,
    track_listing: [
      {
        track_no: 1,
        trackName: "Smells like teen spirit",
        trackArtist: "Nirvana",
      },
      { track_no: 2, trackName: "In Bloom", trackArtist: "Nirvana" },
    ],
  },
  {
    artist: "Miles Davies",
    album: "Blue",
    description: "Best jazz album ever??",
    id: 3,
    release_date: "17/08/1959",
    added_date: "29/03/1996",
    image: kindofblue,
    track_listing: [
      {
        track_no: 1,
        trackName: "So What",
        trackArtist: "Miles Davies",
      },
      {
        track_no: 2,
        trackName: "Freddie Freeloader",
        trackArtist: "Miles Davies",
      },
    ],
  },
  {
    artist: "Miles Davies",
    album: "Bitches Brew",
    description: "Nice!!!!!!",
    id: 4,
    release_date: "30/03/1970",
    added_date: "29/03/1996",
    image: bitchesbrew,
    track_listing: [
      {
        track_no: 1,
        trackName: "Bitches Brew",
        trackArtist: "Miles Davies",
      },
      {
        track_no: 2,
        trackName: "Pharaoh's Dance",
        trackArtist: "Miles Davies",
      },
    ],
  },
];

function CardList() {
  const [albums, setAlbums] = useState(dummyAlbumInfo);

  useEffect(() => {
    console.log(albums);
    console.log(albums.length);
  }, [albums]);

  return (
    <div className="col-12">
      <div className="row">
        {albums &&
          albums.map((album) => {
            return <AlbumCard albumData={album} key={album.id} />;
          })}
      </div>
    </div>
  );
}

export default CardList;
