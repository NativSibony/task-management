import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Tasks from './pages/tasks/Tasks';
import NotFound from './pages/notfound/NotFound';
import TaskDetails from './pages/taskDetails/TaskDetails';

function App() {
  return (
    <>
      <Container display={'flex'} justifyContent={'center'} paddingBlock={10} maxW={'100ch'}>
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
