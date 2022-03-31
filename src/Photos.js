import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          <div className="col-3">
            {props.photos.map(function (photo, index) {
              return (
                <span key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt="keyword_photo"
                    />
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
