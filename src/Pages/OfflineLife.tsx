import "./OfflineLife.css";

const OfflineLife = () => {
  const photos = [
    {
      src: "/images/jojo.jpg",
      alt: "JoJo Exhibit",
      caption: "Cultural Inspiration",
      className: "portrait"
    },
    {
      src: "/images/hike.jpg",
      alt: "Hiking Meditation",
      caption: "Moments of Stillness",
      className: "portrait"
    },
    {
      src: "/images/bike.jpg",
      alt: "Fixed Gear Bike",
      caption: "Urban Exploration",
      className: "landscape"
    },
  ];

  return (
    <div className="offline-section">
      <div className="section-title">
        <h1>OFFLINE LIFE</h1>
        <div className="title-underline"></div>
      </div>
      <div className="offline-page-wrapper">
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div key={index} className={`gallery-item ${photo.className}`}>
              <img src={photo.src} alt={photo.alt} />
              <div className="caption-overlay">
                <p>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfflineLife;
