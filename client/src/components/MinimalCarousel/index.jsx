import { Carousel } from "react-carousel-minimal";
import shed from "../../assets/images/lgu/shed.png";
import shed1 from "../../assets/images/lgu/shed1.jpg";
import shed2 from "../../assets/images/lgu/shed2.jpg";
import shed3 from "../../assets/images/lgu/shed3.gif";

function MinimalCarousel() {
  const data = [
    {
      image: shed1,
    },
    {
      image: shed2,
    },
    {
      image: shed3,
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
            thumbnailWidth="200px"
            style={{
              textAlign: "center",
              maxWidth: "1203px",
              maxHeight: "auto",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MinimalCarousel;
