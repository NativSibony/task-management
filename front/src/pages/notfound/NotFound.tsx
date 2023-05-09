import { Button, Flex, Image, Text } from '@chakra-ui/react';
import notFound from '../../assets/images/404.webp';

function NotFound() {
  return (
    <Flex direction='column' alignItems='center' justifyContent='center' h='100vh'>
      <Image src={notFound} />
      <Text marginBlock='4' fontSize='2xl' className='uppercase'>
        Page Not Found
      </Text>
      <Button bg={'#0F52BA'} textColor={'white'} _hover={{ opacity: 0.8 }} onClick={() => (window.location.href = '/')}>
        Home
      </Button>
    </Flex>
  );
}

export default NotFound;
