import { React, useState, useEffect } from "react";

import "./AlbumCard.css";

function AlbumCard(props) {
  const albumData = props.albumData;

  // useEffect(() => {
  //   console.log(albumData);
  //   console.log(albumData.length);
  // }, [albumData]);

  return (
    <div className="col-md d-flex mb-4 mt-2">
      <div className="card w-100 m-1 bg-success-subtle d-flex flex-column">
        <img src={albumData.image} className="card-img-top" alt="#" />
        <div className="card-body d-flex flex-column">
          <div className="card-title">
            {albumData.artist} : {albumData.album}
          </div>
          <div className="card-text flex-grow-1">
            {albumData.description}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
