import { Button, Card, CardBody, Flex } from '@chakra-ui/react';
import { Task as TaskType } from '../../types/task.type';
import { getStatusText } from '../../utils/utils';
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import TaskButton from '../../components/TaskButton';
import TaskMetadata from './TaskMetadata';

function Task({ id, title, created, status, assignee }: TaskType) {
  const navigate = useNavigate();

  return (
    <Card shadow={'md'} w={'full'} _hover={{ boxShadow: 'lg' }} cursor={'pointer'} onClick={() => navigate(`/tasks/${id}`)}>
      <CardBody display={'flex'} alignItems={'center'} columnGap={4}>
        <TaskButton iconType={1} />
        <Flex wrap={'wrap'} w={'full'} alignItems={'center'} justifyContent={'space-between'}>
          <TaskMetadata title={title} created={created} assignee={assignee} />
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            columnGap={4}
            borderLeft={'1px solid'}
            borderColor={'gray.200'}
            w={'40'}
            p={4}
          >
            <Button variant='outline' _hover={{}} fontSize={'sm'} colorScheme={'gray'}>
              {getStatusText(status)}
            </Button>
            <BsChevronRight className='text-gray-500 text-xl' />
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Task;
