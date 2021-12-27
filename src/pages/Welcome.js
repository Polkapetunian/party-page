import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Welcome = () => {
  const [welcomeData, setWelcomeData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "home"]{
      title,
      mainImage{
        asset->{
          _id,
          url
        }
        },
        body,
        publishedAt,
        "documentURL": document.asset->url,
        "name": author -> name,
        "authorImage": author -> image,
        "bio": author -> bio,
      }`
    )
      .then((data) => setWelcomeData(data[0]))
      .catch(console.error);
  }, []);

  console.log(welcomeData);

  if (!welcomeData) return <div>Loading...</div>;


  return (
    <div>
      <h2>
        {welcomeData.title}
      </h2>
      <img src={urlFor(welcomeData.mainImage).width(300).url()} alt="" />
      <div>
        <div className="author-container">
          <img
            className="author-image"
            src={urlFor(welcomeData.authorImage).width(100).url()}
            alt={welcomeData.name}
          />
          <div className="image-overlay">{welcomeData.bio}</div>
          <h3>{welcomeData.name}</h3>
        </div>
        <BlockContent
          blocks={welcomeData.body}
          projectId={sanityClient.config().projectId}
          dataset={sanityClient.config().dataset}
        />
      </div>
    </div>
  )
};
export default Welcome;