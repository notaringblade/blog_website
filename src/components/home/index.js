import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function Home() {

  const blogs = [
    {id : 1, title: 'The Sudden Fall of JingOS and their Linux Tablet', body: 'The entire Linux community was hyped about the JingPad. It was the first Linux tablet that had amazing build quality, and its own flagship iPad OS inspired distro helped too. We could have had on our hands one of the best pieces of Linux hardware, complete with features such as Android app support. However, this never came to be, and the company behind it seems to be completely dead.' },
    {id : 2, title: 'The Sudden Fall of JingOS and their Linux Tablet', body: 'The entire Linux community was hyped about the JingPad. It was the first Linux tablet that had amazing build quality, and its own flagship iPad OS inspired distro helped too. We could have had on our hands one of the best pieces of Linux hardware, complete with features such as Android app support. However, this never came to be, and the company behind it seems to be completely dead.' },
    {id : 3, title: 'The Sudden Fall of JingOS and their Linux Tablet', body: 'The entire Linux community was hyped about the JingPad. It was the first Linux tablet that had amazing build quality, and its own flagship iPad OS inspired distro helped too. We could have had on our hands one of the best pieces of Linux hardware, complete with features such as Android app support. However, this never came to be, and the company behind it seems to be completely dead.' },
    {id : 4, title: 'The Sudden Fall of JingOS and their Linux Tablet', body: 'The entire Linux community was hyped about the JingPad. It was the first Linux tablet that had amazing build quality, and its own flagship iPad OS inspired distro helped too. We could have had on our hands one of the best pieces of Linux hardware, complete with features such as Android app support. However, this never came to be, and the company behind it seems to be completely dead.' },
    {id : 5, title: 'The Sudden Fall of JingOS and their Linux Tablet', body: 'The entire Linux community was hyped about the JingPad. It was the first Linux tablet that had amazing build quality, and its own flagship iPad OS inspired distro helped too. We could have had on our hands one of the best pieces of Linux hardware, complete with features such as Android app support. However, this never came to be, and the company behind it seems to be completely dead.' },
    {id : 6, title: 'The Sudden Fall of JingOS and their Linux Tablet', body: 'The entire Linux community was hyped about the JingPad. It was the first Linux tablet that had amazing build quality, and its own flagship iPad OS inspired distro helped too. We could have had on our hands one of the best pieces of Linux hardware, complete with features such as Android app support. However, this never came to be, and the company behind it seems to be completely dead.' },

  ]

  return (
      <Container fluid = 'lg' className='blog-view'>
        <div >
          <Row xs='1' sm='2' md='3'  lg = '3'>
          {
            blogs.map((blogs) =>(
                  <Col >
                    <Card className='blog'

                              color= 'dark'

                              >
                              <img className='image'
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                              />
                              <CardBody>
                                <CardTitle tag="h5">
                                  {blogs.title}
                                </CardTitle>
                                
                                <CardText className='summary-text'>
                                {blogs.body}

                                </CardText>
                                
                              </CardBody>

                              </Card>
                  </Col>
              ))
            }
            </Row>
        </div>
      </Container>
  )
}
