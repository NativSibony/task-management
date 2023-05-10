import { Button, Flex, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import Task from '../task/Task';
import { Task as TaskType } from '../../types/task.type.ts';
import { useEffect, useState } from 'react';
import { getTasks, getUsers } from '../../helpers/service.helper.ts';
import CreateTask from '../createTask/CreateTask.tsx';
import { User } from '../../types/user.type.ts';

function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
      setIsLoading(false);
    });
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  return (
    <Flex flexDirection={'column'} justifyContent={'center'} w={'full'} mt={40}>
      <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'} mb={4}>
        <Text fontSize='2xl' textAlign={'left'} className='text-gray-600 font-semibold'>
          Tasks
        </Text>
        <Button onClick={onOpen} colorScheme={'blue'}>
          New Task
        </Button>
      </Flex>
      {isLoading ? (
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      ) : (
        <Flex flexDirection={'column'} rowGap={4} w={'full'}>
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </Flex>
      )}
      <CreateTask users={users} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Tasks;
