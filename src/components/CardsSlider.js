import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{background:"grey", padding:"5%"}}>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex",  }}>
                    <Card className="bg-dark text-white" >
                        <Card.Img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0MjlrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-vnxmufqyps-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00313076-bwnwcnftzb-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00128923-zdgqvzwdtz-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00132847-haklbxthax-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29/et00107364-sgtyjcebux-portrait.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="https://static.toiimg.com/thumb/msid-80011523,width-219,height-317,imgsize-57277/80011523.jpg" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            {/* <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text> */}
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;
