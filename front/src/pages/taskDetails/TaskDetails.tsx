import { useParams } from 'react-router-dom';
import { allTasks, firstTask } from '../../mock/tasks';
import { Badge, Box, Flex, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import TaskButton from '../../components/TaskButton';
import { getParsedDate, getStatusText } from '../../utils/utils';
import Task from '../task/Task';

function TaskDetails() {
  const { id } = useParams();

  return (
    <Flex direction={'column'} w={'full'} bg={'#F7F9FC'} p={4}>
      <Flex pb={4} gap={5} w={'full'} borderBottom={'1px'} borderColor={'gray.300'}>
        <TaskButton iconType={0} />
        <Flex direction={'column'} gap={1}>
          <Text fontWeight={'medium'}>{firstTask.title}</Text>
          <Box display={'flex'} gap={1} flexWrap={'wrap'}>
            <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.400'}>
              {firstTask.assignee}
              <span className='px-1'>⋅</span>
            </Text>
            <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.400'}>
              Creation Date
              <span className='pl-2 font-normal text-gray-500'>{getParsedDate(firstTask.created)}</span>
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex w={'full'} p={5} columnGap={20} wrap={'wrap'}>
        <Flex direction={'column'} justifyContent={'center'} gap={1}>
          <Text color={'gray.500'}>Status</Text>
          <Badge color={'gray.600'} paddingX={'2'} rounded={'full'} className='capitalize'>
            {getStatusText(firstTask.status)}
          </Badge>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} gap={1}>
          <Text color={'gray.500'}>Date created</Text>
          <Badge color={'gray.600'} paddingX={'2'} rounded={'full'} className='capitalize'>
            {getParsedDate(firstTask.created)}
          </Badge>
        </Flex>
        <Flex direction={'column'} justifyContent={'center'} gap={1}>
          <Text color={'gray.500'}>Assignee</Text>
          <Badge color={'gray.600'} paddingX={'2'} rounded={'full'} className='capitalize'>
            {firstTask.assignee}
          </Badge>
        </Flex>
      </Flex>
      <Flex direction={'column'} w={'full'} p={5} rowGap={1}>
        <Text color={'gray.500'}>Description</Text>
        <Box bg={'#EEF2F8'} p={5} rounded={'lg'} minH={120}>
          {firstTask.description}
        </Box>
      </Flex>
      <Tabs display={'flex'} flexDirection={'column'} w={'full'} p={5}>
        <TabList maxW={'fit-content'}>
          <Tab>Related tasks</Tab>
          <Tab>Watchers</Tab>
        </TabList>

        <TabPanels minH={150}>
          <TabPanel>
            {firstTask.linked_tasks
              ? firstTask.linked_tasks.map((task) => <Task key={task.id} {...task} />)
              : 'No Linked Tasks Available In This Task'}
          </TabPanel>
          <TabPanel>
            <p>No Watchers Available For This Task</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default TaskDetails;
