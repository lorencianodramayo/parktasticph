import { Carousel } from "react-carousel-minimal";
import shed from "../../assets/images/lgu/shed.png";

function MinimalCarousel() {
  const data = [
    {
      image: shed,
    },
    {
        image: shed,
      },
      {
        image: shed,
      },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={2000}
            width="1203px"
            height="562px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="400px"
            style={{
              textAlign: "center",
              maxWidth: "1203px",
              maxHeight: "562px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MinimalCarousel;
