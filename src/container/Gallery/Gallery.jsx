import { React, useRef } from 'react';
import './Gallery.css';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import images from '../../constants/images';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app_gallery app_bg flex_center" id="gallery">
      <div className="app_gallery-content">
        <h1 className="headtext_Aboreto">Photo Gallery</h1>
        <p className="app_gallery-description p_ubuntu ">
          dipndip is all about sharing memorable experiences with friends and family. 
          <br />We’re excited to share our latest creation.
        </p>
        <button type="button" className="custom_button">View More</button>
      </div>

      <div className="app_gallery-images">
        <div className="app_gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app_gallery-images_card flex_center" key={`gallery_images-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery_image-icon" />
            </div>
          ))}
        </div>
        <div className="app_gallery-images_arrows">
          <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;