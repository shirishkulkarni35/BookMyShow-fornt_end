import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background:"rgb(43, 49, 72)", padding:"5%"}}>
        <h2 style={{color:"white"}}>Premieres</h2>
        <Carousel indicators={false} variant="dark">
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/coma-et00303851-25-01-2021-03-39-41.jpg" />
                        <Card.Body>
                        <Card.Title>Coma</Card.Title>
                        <Card.Text>
                            Language: English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>Fast and Furious</Card.Title>
                        <Card.Text>
                            Language: English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/ravana-lanka-et00312121-22-06-2021-01-44-29.jpg" />
                        <Card.Body>
                        <Card.Title>Ravana Lanka</Card.Title>
                        <Card.Text>
                            Language: Telugu
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/et00316141-wfaajwbzab-portrait.jpg" />
                        <Card.Body>
                        <Card.Title>The Sister</Card.Title>
                        <Card.Text>
                            Language: English
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/trip-et00126236-16-12-2020-02-06-35.jpg" />
                        <Card.Body>
                        <Card.Title>Trip</Card.Title>
                        <Card.Text>
                            Language: Tamil
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/dhaakad-et00106640-18-01-2021-01-32-10.jpg" />
                        <Card.Body>
                        <Card.Title>Dhaakad</Card.Title>
                        <Card.Text>
                            Language: Hindi
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;
