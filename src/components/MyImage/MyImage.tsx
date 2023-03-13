import React, { useEffect, useState } from "react";
import myImg from "../../assets/picture/picture.jpeg";
import unknownPeoson from "../../assets/picture/mystery-person.jpeg";
import "./style.css";
function MyImage() {
  const [isHover, setIsHover] = useState(false);
  const [imgSrc, setImgSrc] = useState(unknownPeoson);
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleImgLoad = () => {
    setImgLoaded(true);
  };

  const onMouseEnter = () => {
    setIsHover(true);
    setImgSrc(myImg);
  };
  const onMouseLeave = () => {
    setImgSrc(unknownPeoson);
    setIsHover(false);
  };
  useEffect(() => {
    setImgLoaded(false);
    setImgSrc(unknownPeoson);
  }, []);
  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={
          isHover ? "image-wrapper image-wrapper-hover" : "image-wrapper"
        }
      >
        <div className="image-text">test</div>
        <div className="picture">
          <img
            src={imgSrc}
            alt="myself"
            onLoad={handleImgLoad}
            className={imgLoaded ? "loaded" : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default MyImage;
