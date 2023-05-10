import { Badge, Flex, Text } from '@chakra-ui/react';

type TitledBadgeType = {
  title: string;
  info: string | undefined;
};

function TitledBadge({ title, info }: TitledBadgeType) {
  return (
    <Flex direction={'column'} justifyContent={'center'} gap={1}>
      <Text color={'gray.500'}>{title}</Text>
      <Badge color={'gray.600'} paddingX={'2'} rounded={'full'} className='capitalize'>
        {info || 'N/A'}
      </Badge>
    </Flex>
  );
}

export default TitledBadge;
