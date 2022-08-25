import React from 'react'
import './index.css'
import { Container } from 'reactstrap'


export default function Write() {
  return (
    <>
      <div className='writing-area'>
        <Container fluid className='title-area'>
          {/* <input type= "file"   /> */}
          <input type= "text" placeholder= "Blog Title" className='title-input' autoFocus/>
        </Container>

        <Container fluid>
          <textarea type= "text" placeholder= "Write Your Story..." className='body-input' />
        </Container>
      </div>
    </>
  )
}
