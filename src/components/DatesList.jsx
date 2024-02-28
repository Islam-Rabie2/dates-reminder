import React from 'react'
import { Row ,Col} from 'react-bootstrap'

const DatesList = ({person}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm="8">
      <div className='rectangle p-1'>
        {person.length ? (person.map((item) =>{
          return(
            <div key={item.id} className='d-flex border-bottom mx-2 my-2'>
            <img className='img-avatar' src='time.png' alt='sdsd' />
            <div className='px-3'>
            <p className='d-inline fontName'>{item.name}</p>
            <p className='fontTime'> {item.date} </p>
          </div>
          </div>

          )
        })) : <h2 className='p-5 text-center'>لا يوجد مواعيد اليوم</h2>}
      
      </div>
    </Col>
  </Row>
  )
}

export default DatesList