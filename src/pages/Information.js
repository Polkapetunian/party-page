import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';
import BlockContent from "@sanity/block-content-to-react";
import { Map, Marker, ZoomControl } from "pigeon-maps";


const Information = () => {
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "info"]{
      title,
      mainImage{
        asset->{
          _id,
          url
        }
        },
        body,
        partyTime,
        location,
        coordinates,
        "name": author -> name,
        "authorImage": author -> image
      }`
    )
      .then((data) => setInfoData(data[0]))
      .catch(console.error);
  }, []);

  console.log(infoData);


  if (!infoData) return <div>Loading...</div>;

  //Time details

  const time = new Date(infoData.partyTime);
  let weekDay;
  let weekDayNumber = time.getDay();
  if (weekDayNumber === 0) {
    weekDay = "måndag"
  } else if (weekDayNumber === 1) {
    weekDay = "tisdag"
  } else if (weekDayNumber === 2) {
    weekDay = "onsdag"
  } else if (weekDayNumber === 3) {
    weekDay = "torsdag"
  } else if (weekDayNumber === 4) {
    weekDay = "fredag"
  } else if (weekDayNumber === 5) {
    weekDay = "lördag"
  } else {
    weekDay = "söndag"
  };

  let date = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  //Position details
  let lat = infoData.coordinates.lat;
  let long = infoData.coordinates.lng;
  console.log(lat)
  console.log(long)

  //Responsive map size
  let mapHeight;
  let bigScreen = false;

  if (window.innerWidth <= 768) {
    mapHeight = '300px';
  } else {
    mapHeight = '500px';
    bigScreen = true;
  }

  return (
    <div className="info-container">
      <div className="info-text-container">
        <h2>
          {infoData.title}
        </h2>
        <p className="info-text">Tid: {weekDay} {date} / {month} - {year}, kl. {hours}:{minutes}</p>
        <p className="info-text">Plats: {infoData.location} </p>
        <BlockContent
          blocks={infoData.body}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
        />
      </div>
      <Map height={mapHeight} defaultCenter={[59.861315, 17.645395]} defaultZoom={11}>
        <Marker width={50} anchor={[lat, long]} />
        {bigScreen && <ZoomControl />}
      </Map>
    </div>
  )
};
export default Information;