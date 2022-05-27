import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function DetailBeer() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      {beer && (
        <>
          <h1>{beer.name}</h1>
          <img className="detailbeer" src={beer.image_url} alt="beer" />
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}

      <Link to="/beers">
        <button>Back to beers</button>
      </Link>
    </div>
  );
}

export default DetailBeer;
