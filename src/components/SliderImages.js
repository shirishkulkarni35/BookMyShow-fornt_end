import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
        <Carousel fade variant="dark">
            <Carousel.Item >
                <img
                className="d-block w-100 h-30"
                src="https://pbs.twimg.com/media/DXLmtgXV4AAJENl.jpg:large"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-30"
                src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-my-singapore-connect-0-2020-11-21-t-20-55-54.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-30"
                src="https://m.media-amazon.com/images/I/415b3x%2B%2BjbL.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;
