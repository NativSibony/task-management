import { useParams } from 'react-router-dom';
import { Box, Flex, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import TaskButton from '../../components/TaskButton';
import { getParsedDate, getStatusText } from '../../utils/utils';
import Task from '../task/Task';
import { useEffect, useState } from 'react';
import { getTask } from '../../helpers/service.helper';
import { Task as TaskType } from '../../types/task.type';
import TitledBadge from '../../components/TitledBadge';

function TaskDetails() {
  const { id } = useParams();

  const [task, setTask] = useState<TaskType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    id &&
      getTask(parseInt(id)).then((task) => {
        setTask(task);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Flex direction={'column'} alignItems={'center'} w={'full'} bg={'#F7F9FC'} p={4}>
      {isLoading ? (
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      ) : (
        <>
          <Flex pb={4} gap={5} w={'full'} borderBottom={'1px'} borderColor={'gray.300'}>
            <TaskButton iconType={0} />
            <Flex direction={'column'} gap={1}>
              <Text fontWeight={'medium'}>{task?.title}</Text>
              <Box display={'flex'} gap={1} flexWrap={'wrap'}>
                <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.400'}>
                  {task?.assignee}
                  <span className='px-1'>⋅</span>
                </Text>
                <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.400'}>
                  Creation Date
                  <span className='pl-2 font-normal text-gray-500'>{getParsedDate(task?.created)}</span>
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex w={'full'} p={5} columnGap={20} wrap={'wrap'}>
            <TitledBadge title='Status' info={getStatusText(task!.status)} />
            <TitledBadge title='Date created' info={getParsedDate(task!.created)} />
            <TitledBadge title='Assignee' info={task!.assignee} />
          </Flex>
          <Flex direction={'column'} w={'full'} p={5} rowGap={1}>
            <Text color={'gray.500'}>Description</Text>
            <Box bg={'#EEF2F8'} p={5} rounded={'lg'} minH={120}>
              {task?.description || 'No Description Available In This Task'}
            </Box>
          </Flex>
          <Tabs display={'flex'} flexDirection={'column'} w={'full'} p={5}>
            <TabList maxW={'fit-content'}>
              <Tab>Related tasks</Tab>
              <Tab>Watchers</Tab>
            </TabList>

            <TabPanels minH={150}>
              <TabPanel display={'flex'} flexDirection={'column'} gap={2}>
                {task?.linked_tasks?.length
                  ? task?.linked_tasks.map((task) => <Task key={task.id} {...task} />)
                  : 'No Linked Tasks Available In This Task'}
              </TabPanel>
              <TabPanel>
                <p>No Watchers Available For This Task</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      )}
    </Flex>
  );
}

export default TaskDetails;
