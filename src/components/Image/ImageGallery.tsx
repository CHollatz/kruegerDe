import React, { useState } from "react";
import { CustomImage } from ".";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import fabi1 from "../../assets/fabi1.jpg";
import fabi2 from "../../assets/fabi2.jpg";
import fabi3 from "../../assets/fabi3.jpg";
import fabi4 from "../../assets/fabi4.jpg";
import fabi5 from "../../assets/fabi5.jpg";

export const ImageGallery = () => {
  const images = [fabi2, fabi3, fabi1, fabi4, fabi5];
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mt-24 mb-8">
      <div className="flex flex-row flex-wrap justify-center mx-auto">
        {images.slice(0, 2).map((image, index) => (
          <CustomImage
            src={image}
            onClick={() => {
              setIsOpen(true);
              setPhotoIndex(index);
            }}
            className="w-1/3"
          />
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center mx-auto">
        {images.slice(Math.max(images.length - 3, 1)).map((image, index) => (
          <CustomImage
            src={image}
            onClick={() => {
              setIsOpen(true);
              setPhotoIndex(index + 2);
            }}
          />
        ))}
      </div>

      {/* {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length,)
                    }
                />
            )} */}
    </div>
  );
};
