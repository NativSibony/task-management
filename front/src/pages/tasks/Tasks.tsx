import { Button, Flex, Text } from '@chakra-ui/react';
import Task from '../task/Task';
import { allTasks } from '../../mock/tasks.ts';

function Tasks() {
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} w={'full'}>
      <header className='w-full'>
        <Text fontSize='2xl' textAlign={'left'} className='text-gray-600 font-semibold'>
          Tasks
        </Text>
        <Button>New Task</Button>
      </header>
      <Flex flexDirection={'column'} rowGap={4} w={'full'}>
        {allTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Tasks;
