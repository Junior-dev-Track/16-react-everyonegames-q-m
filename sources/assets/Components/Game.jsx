import API from "../../API";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Game = () => {
  const QUERY = "games";
  const { ID } = useParams();
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/${QUERY}/${ID}?key=${KEY}`;

  const [data, setData] = useState();
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.log(`Query ${ID} :`, request);
      setData(request);
    };
  }, []);

  return (
    <main>
      <div className="container-main">
        {data && (
          <section>
            <h1>{data.name}</h1>
            <img src={data.background_image} />
            <h2>About </h2>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
            <h3>Metascore</h3>
            {data.metacritic}
            <h3>Genre</h3>
            {data.genres &&
              Array.isArray(data.genres) &&
              data.genres.map((genre, genreIndex) => (
                <p key={genreIndex}>{genre.name}</p>
              ))}
            <h3>Platforms</h3>
            {data.platforms &&
              Array.isArray(data.platforms) &&
              data.platforms.map((platform, platformIndex) => (
                <p key={platformIndex}>{platform.platform.name}</p>
              ))}
            <h3>Release date</h3>
            {data.released}
            <h3>Developers</h3>
            {data.developers &&
              Array.isArray(data.developers) &&
              data.developers.map((developer, developerIndex) => (
                <p key={developerIndex}>{developer.name}</p>
              ))}

            <h3>Publisher</h3>
            {data.publishers &&
              Array.isArray(data.publishers) &&
              data.publishers.map((publisher, publisherIndex) => (
                <p key={publisherIndex}>{publisher.name}</p>
              ))}

            <h3>Tags</h3>
            {data.tags &&
              Array.isArray(data.tags) &&
              data.tags.map((tag, tagIndex) => (
                <p key={tagIndex}>{tag.name}</p>
              ))}

            <h3>Web site</h3>
            <p>{data.website}</p>
          </section>
        )}
      </div>
    </main>
  );
};

export default Game;
