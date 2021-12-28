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
    <div className="welcome-container">
      <div>
        <h2 className="welcome-heading">
          {welcomeData.title}
        </h2>
        <picture className="welcome-image">
          <source media="(min-width:1200px)" srcset={urlFor(welcomeData.mainImage).width(500).url()} />
          <source media="(min-width:600px)" srcset={urlFor(welcomeData.mainImage).width(450).url()} />
          <img src={urlFor(welcomeData.mainImage).width(300).url()} alt="" />
        </picture>
      </div>

      {/* style={{ width: 'auto' }} */}

      <div>
        <div className="author-container">
          <img
            className="author-image"
            src={urlFor(welcomeData.authorImage).width(100).url()}
            alt={welcomeData.name}
          />
          <div className="image-overlay">{welcomeData.bio}</div>
          <h3 className="author-name">{welcomeData.name}</h3>
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