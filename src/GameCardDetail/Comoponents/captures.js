import { ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

const RAWKey = "5b006bc1923645c6a0d3c7665b7ed768";

const Captures = ({ slug }) => {
  const [images, setImages] = useState();

  useEffect(() => {
    const getImages = async () => {
      if (slug) {
        const images = await fetch(
          `https://rawg.io/api/games/${slug}/screenshots?key=${RAWKey}`
        ).then((data) => data.json());

        setImages(images.results);
      }
    };

    getImages();
  }, [slug]);

  return (
    <>
      {images && (
        <>
          <ImageList cols={1}>
            {images.map((e, i) => {
              if (i === 0) {
                return (
                  <ImageListItem key={e.id}>
                    <img
                      src={`${e.image}?w=248&fit=crop&auto=format`}
                      srcSet={`${e.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={slug}
                      loading="lazy"
                      style={{ borderRadius: "7px" }}
                    />
                  </ImageListItem>
                );
              }
              return null;
            })}
          </ImageList>
          <ImageList cols={3}>
            {images.map((e, i) => {
              if (i > 0) {
                return (
                  <ImageListItem key={e.id}>
                    <img
                      src={`${e.image}?w=248&fit=crop&auto=format`}
                      srcSet={`${e.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={slug}
                      loading="lazy"
                      style={{ borderRadius: "7px" }}
                    />
                  </ImageListItem>
                );
              }
              return null;
            })}
          </ImageList>
        </>
      )}
    </>
  );
};

export default Captures;
