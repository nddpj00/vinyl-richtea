import { React, useState, useEffect } from "react";

import "./AlbumCard.css";

function AlbumCard(props) {
  const albumData = props.albumData;

  // useEffect(() => {
  //   console.log(albumData);
  //   console.log(albumData.length);
  // }, [albumData]);

  return (
    <div className="col-md">
      <div className="card w-100 m-1 bg-success-subtle">
        <img src={albumData.image} className="card-img-top" alt="#" />
        <div className="card-body">
          <div className="card-title">
            {albumData.artist} : {albumData.album}
          </div>
          <div className="card-text">
            {albumData.description}
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
