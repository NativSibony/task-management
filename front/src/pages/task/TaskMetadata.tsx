import { Box, Flex, Text } from '@chakra-ui/react';
import { getParsedDate } from '../../utils/utils';

type TaskMetadata = {
  title: string;
  assignee: string | undefined;
  created: number | undefined | Date;
};

function TaskMetadata({ title, assignee, created }: TaskMetadata) {
  return (
    <Flex direction={'column'} gap={1}>
      <Text fontWeight={'medium'}>{title}</Text>
      <Box display={'flex'} gap={1} flexWrap={'wrap'}>
        <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.400'}>
          {assignee}
          <span className='px-1'>⋅</span>
        </Text>
        <Text fontWeight={'medium'} fontSize={'sm'} color={'gray.400'}>
          Creation Date
          <span className='pl-2 font-normal text-gray-500'>{getParsedDate(created)}</span>
        </Text>
      </Box>
    </Flex>
  );
}

export default TaskMetadata;
