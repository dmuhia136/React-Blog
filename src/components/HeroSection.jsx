import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

function HeroSection() {
  const images = [
    { url: ".././src/assets/video1.jpg" },
    { url: ".././src/assets/video2.jpeg" },
    { url: ".././src/assets/video3.jpg" },
  ];

  return (
    <div>
      <SimpleImageSlider
        width={`100%`}
        height={504}
        slideDuration={3}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default HeroSection;
