import React,{useState,useEffect, useCallback, useMemo} from 'react'
import Images from './SliderData'
import './ImageSlider.css'

const ImageSliderCom = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  const nextImage = useCallback(() => {
    setAnimation(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
      setAnimation(false);
    }, 2000);
  }, []);

  const prevImage = useCallback(() => {
    setAnimation(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + Images.length) % Images.length
      );
      setAnimation(false);
    }, 2000);
  }, []);

  // Auto slide using interval (cleaned up properly)
  useEffect(() => {
    const interval = setInterval(nextImage, 7000);
    return () => clearInterval(interval);
  }, [nextImage]);

  // Memoized current and other images
  const { CurrentImage, SliderImages } = useMemo(() => {
    const CurrentImage = Images[currentIndex];
    const SliderImages = Images.filter((item) => item.id !== CurrentImage.id);
    return { CurrentImage, SliderImages };
  }, [currentIndex]);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
  //   }, 7000);

  // }, [currentIndex]);

  return (
    <main
      className="image-slider-container"
      style={{ backgroundImage: `url(${CurrentImage.image})`}} >
      <article className="slider-details-container">
        <h4 className={`slider-container-placeinfo ${animation?"slider-animation":""}`}>{CurrentImage.title}</h4>
        <h2 className={`slider-container-placehead ${animation?"slider-animation":""}`}>{CurrentImage.heading}</h2>
        <p className={`slider-container-placeinfo ${animation ?"slider-animation":""}`}>{CurrentImage.description}</p>
      </article>

      <section className="image-slider">
        {SliderImages.map((sliders) => {
          return (
            <article key={sliders.id} className="slide">
              <img
                src={sliders.image}
                alt={sliders.title || "Slide image"}
                className={`slide-image ${animation ? "fade-out" : "fade-in"}`}
                loading="lazy"
              />
              <h4 className={`slide-title ${animation ? "fade-out":"fade-in"}`}>{sliders.title}</h4>
              <p className={`slide-heading ${animation ?"fade-out":"fade-in"}`}>{sliders.heading}</p>
            </article>
          );
        })}
      </section>

      <div className="slider-controls">
        <button
          type="button"
          aria-label="Previous image"
          className="slider-btn prev-btn"
          onClick={prevImage}
        >
          prev
        </button>
        <button
          type="button"
          aria-label="Next image"
          className="slider-btn next-btn"
          onClick={nextImage}
        >
          next
        </button>
      </div>

      <section className="slider-dots">
        {Images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </section>
    </main>
  );
}

export default ImageSliderCom