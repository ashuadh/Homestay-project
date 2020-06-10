import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function HomestayImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.roomImages && props.detail.roomImages.length > 0) {
      let images = [];

      props.detail.roomImages &&
        props.detail.roomImages.map((item) => {
          images.push({
            original: `http://localhost:5000/${item}`,
            thumbnail: `http://localhost:5000/${item}`,
          });
        });
      setImages(images);
    }
  }, [props.detail]);

  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default HomestayImage;
