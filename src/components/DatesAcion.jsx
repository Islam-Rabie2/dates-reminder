import React from 'react'
import { Row , Col} from 'react-bootstrap'

const DatesAcion = ({deleteData , showData}) => {
  return (
    <Row className='justify-content-center'>
    <Col sm="8" className='d-flex justify-content-between' >
      <button onClick={deleteData} className='btn-del-style'>مسح الكل</button>
      <button  onClick={showData} className='btn-get-style'> عرض الكل</button>
    </Col>
  </Row>
  )
}

export default DatesAcion