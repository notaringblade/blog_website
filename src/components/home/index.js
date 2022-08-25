import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody } from "reactstrap";

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
      <div className='blog-view'>
        <div >
          <Row xs="3">
          {
            blogs.map((blogs) =>(
                  <Col>
                    <Container className='blog' fluid = "md">
                      <img 
                        alt = 'demo'
                        src="https://picsum.photos/300/200"
                      />
                      <div>
                        <p>
                          {blogs.title}
                        </p>
                      </div>
                      <div className='text-div'>
                        <p className='summary-text'>
                          {blogs.body} ...
                        </p>
                      </div>
                    </Container>
                  </Col>
              ))
            }
            </Row>
        </div>
      </div>
  )
}
