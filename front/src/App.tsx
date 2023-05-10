import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Tasks from './pages/tasks/Tasks';
import NotFound from './pages/notfound/NotFound';
import TaskDetails from './pages/taskDetails/TaskDetails';

function App() {
  return (
    <>
      <Container maxW={'100ch'} className='w-full h-full flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<Tasks />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/tasks/:id' element={<TaskDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
