import React , { useState ,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { person } from './data'
import DatesCount from './components/datesCount';
import DatesList from './components/DatesList';
import DatesAcion from './components/DatesAcion';

function App() {
  const [personData, setPersonData] = useState(person)
  const onDelete= ()=>{
    setPersonData([])
  }
  const onShowData= ()=>{
    setPersonData(person)
  }
  useEffect(()=>{
    setPersonData([])
  },[])

  return (
    <div className='font color-body'>
      <Container className='py-4'>
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAcion deleteData={onDelete} showData={onShowData}/>
      </Container>
    </div>
  );
}
export default App;