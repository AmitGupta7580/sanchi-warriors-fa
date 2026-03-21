import React, { useEffect, useState } from "react";

const galleryImages = Array.from({ length: 14 }, (_, index) => ({
  src: `/gallery/${index + 1}.jpeg`,
  alt: `Sanchi Warriors gallery ${index + 1}`,
}));

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const total = galleryImages.length;
  const autoScrollDelay = 2800;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const goPrev = () => {
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideDirection("right");
      setCurrentIndex((prev) => (prev + 1) % total);
    }, autoScrollDelay);

    return () => {
      window.clearInterval(timer);
    };
  }, [total]);

  return (
    <section id="gallary" className="section section-alt gallery-section">
      <div className="container">
        <h2 className="gallery-heading">Gallery</h2>
        <div className="gallery-carousel">
          <button className="gallery-arrow left" onClick={goPrev} aria-label="Previous image">
            &#10094;
          </button>

          <div className="gallery-stage">
            <div className="gallery-item gallery-item-side left" key={galleryImages[prevIndex].src}>
              <img src={galleryImages[prevIndex].src} alt={galleryImages[prevIndex].alt} loading="lazy" />
            </div>

            <div
              className={`gallery-item gallery-item-main ${slideDirection === "right" ? "slide-right" : "slide-left"}`}
              key={galleryImages[currentIndex].src}
            >
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                loading="lazy"
              />
            </div>

            <div className="gallery-item gallery-item-side right" key={galleryImages[nextIndex].src}>
              <img src={galleryImages[nextIndex].src} alt={galleryImages[nextIndex].alt} loading="lazy" />
            </div>
          </div>

          <button className="gallery-arrow right" onClick={goNext} aria-label="Next image">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
