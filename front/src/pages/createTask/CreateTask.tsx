import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormHelperText,
  Flex,
  InputGroup,
  FormLabel,
  Textarea,
  useToast,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Spinner,
} from '@chakra-ui/react';
import Select, { PropsValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState, useEffect, ChangeEvent } from 'react';
import { User } from '../../types/user.type';
import TaskButton from '../../components/TaskButton';
import { getParsedDate } from '../../utils/utils';
import { Task as TaskType } from '../../types/task.type';
import { createNewTask, getTasks } from '../../helpers/service.helper';

type CreateTaskType = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  users: User[];
};

type SelectTaskList = {
  value: any;
  label: string;
};

const animatedComponents = makeAnimated();

function CreateTask({ users, isOpen, onClose }: CreateTaskType) {
  const toast = useToast();
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLinkedTask, setIsLoadingLinkedTask] = useState(false);
  const [linkedTasks, setLinkedTasks] = useState<TaskType[]>([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignee, setAssignee] = useState<string | undefined>('');

  useEffect(() => {
    setIsLoadingLinkedTask(true);
    getTasks().then((tasks) => {
      setTasks(tasks);
      setIsLoadingLinkedTask(false);
    });
  }, []);

  const onSave = async () => {
    console.log(linkedTasks);

    if (taskTitle && taskDescription && assignee) {
      setIsLoading(true);
      toast({
        title: 'Task Created Successfully!',
        position: 'top',
        status: 'success',
        isClosable: true,
      });
      const task: TaskType = {
        id: parseInt(Date.now().toString()),
        title: taskTitle,
        description: taskDescription,
        assignee: assignee,
        status: 0,
        created: Date().toString(),
        linked_tasks: linkedTasks,
      };
      await createNewTask(task);
      setIsLoading(false);
      onClose();
    } else {
      toast({
        title: 'Please fill all the fields',
        position: 'top',
        status: 'error',
        isClosable: true,
      });
    }
  };

  const handleLinkedTaskChange = (selected: SelectTaskList[]) => {
    const task: TaskType[] = selected && selected.map((select) => select.value);
    setLinkedTasks([...task]);
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div className='flex flex-col gap-4'>
              <FormControl display={'flex'} flexDirection={'column'} w={'full'} gap={4}>
                <Flex w={'full'} alignItems={'center'} gap={4}>
                  <TaskButton iconType={0} />
                  <Flex w={'full'} justifyContent={'space-between'}>
                    <InputGroup display={'flex'} flexDirection={'column'} w={'auto'}>
                      <Input
                        fontWeight={'medium'}
                        variant='unstyled'
                        placeholder='Task Title'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
                      />
                      <FormHelperText fontSize={'xs'} color={'gray.500'}>
                        {getParsedDate(Date())}
                      </FormHelperText>
                    </InputGroup>
                    <Select
                      onChange={(selected) => setAssignee(selected?.label)}
                      placeholder='Assignee'
                      options={users.map((user) => ({ value: user.id, label: user.name }))}
                    />
                  </Flex>
                </Flex>
                <FormControl display={'flex'} flexDirection={'column'} w={'auto'}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    focusBorderColor={'gray.200'}
                    _focus={{ backgroundColor: 'gray.200' }}
                    variant='filled'
                    placeholder='Filled'
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTaskDescription(e.target.value)}
                  />
                </FormControl>
              </FormControl>
            </div>
            <Tabs display={'flex'} flexDirection={'column'} w={'full'} paddingBlock={2}>
              <TabList maxW={'fit-content'}>
                <Tab>Link task</Tab>
              </TabList>

              <TabPanels minH={150} paddingBlock={4}>
                <TabPanel display={'flex'} flexDirection={'column'} p={0}>
                  {isLoadingLinkedTask ? (
                    <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
                  ) : (
                    <Select
                      placeholder='Select Task'
                      onChange={handleLinkedTaskChange}
                      isMulti
                      options={tasks.map((task) => ({ value: task, label: task.title }))}
                    />
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter display={'flex'} gap={4}>
            <Button onClick={onClose}>Back</Button>
            <Button type='submit' colorScheme='blue' mr={3} onClick={onSave} isLoading={isLoading}>
              Finish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTask;
