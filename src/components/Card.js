import React, { useState } from "react";
import "./../App.css";

const Card = (props) => {
  const [favorite, setFavorite] = React.useState(false);
  const [array, setArray] = React.useState([]);

  const handleFavClick = () => {
    setFavorite(!favorite);
	console.log( props.data,"id")
	setArray( [...array, props.data] )
	
	console.log( array,"array")
    // setArray((previousState) => ({
    //   array: [...previousState, props.data.mal_id],
    // }));
  };
  // const handleValueChange = (value) => {
  //   let myArr = [...state.myArr];
  //   myArr.push(value);
  //   this.setState({
  //     myArr,
  //   });
  // };

  return (
    <div className="movie-container">
      <div className="card">
        <div className="card-body">
          {
            <div>
              <img
                alt={props.data.title}
                data-src={props.data.image_url}
                className="card-img-top"
                src={props.data.image_url}
              />
              {favorite ? (
                <img
                  onClick={() => handleFavClick()}
                  className="favIconClass"
                  src="/red-heart.png"
                  alt="favIcon"
                />
              ) : (
                <img
                  onClick={() => handleFavClick()}
                  className="favIconClass"
                  src="/heartHollow.png"
                  alt="favIcon"
                />
              )}
            </div>
          }
        </div>
        <div className="cars-body">
          <p className="card-text text-center text-capitalize text-primary">
            {props.data.title}
          </p>

          <p className="car card-text text-center">{props.data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
