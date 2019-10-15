import React from "react";

import Travel from "./Travel"

const travels = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/NYC_Montage_2014_4_-_Jleon.jpg/1280px-NYC_Montage_2014_4_-_Jleon.jpg",
    name: "New York",
    country:
      "America"
  },
  {
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/32/2f.jpg",
    name: "Roma ",
    country:
      "Italy"
  },
  {
    image: "https://www.telegraph.co.uk/content/dam/Travel/leadAssets/26/34/bagan_2634180a.jpg?imwidth=450",
    name : "Bagan",
    country:
      "Birmania"
  },
  {
    image: "https://www.avianca.com/content/dam/avianca_new/promociones/ctg/co_ctg_ciudad.jpg",
    name: "Cartagena ",
    country:
      "Colombia"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      < Travel image = {travel.image}  destination = {travel.name} country = {travel.country} />
    ))}
  </div>
);

export default Travels;