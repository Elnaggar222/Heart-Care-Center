import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const LastArticles = () => {

    const Navigate = useNavigate()

    return (
        <section className="py-5">
            {/* <Container>
                <h2 className="text-center mb-5">Latest Articles</h2>
                <Row lg="4" md="2" sm="1" xs="1" className="g-4">
                    {new Array(4).fill("x").map((_,inx) => (
                        <Col key={inx}>
                            <div>Single Article</div>
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-4">
                    <Button className="px-5" variant="outline-dark" onClick={()=> Navigate("/Blogs")}>see all</Button>
                </div>
            </Container> */}
        </section>
    )
}

export default LastArticles