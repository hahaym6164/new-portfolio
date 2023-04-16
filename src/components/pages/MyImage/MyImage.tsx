import { useEffect, useState } from "react";
import myImg from "../../../assets/picture/picture.jpeg";
import "./style.css";
function MyImage() {
  const [isHover, setIsHover] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleImgLoad = () => {
    setImgLoaded(true);
  };

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };
  useEffect(() => {
    setImgLoaded(false);
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
            src={myImg}
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
