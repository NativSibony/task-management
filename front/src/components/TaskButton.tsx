import { IconButton } from '@chakra-ui/react';
import { ReactSVG } from 'react-svg';
import CheckIcon from '../assets/icons/check.svg';
import PlusIcon from '../assets/icons/plus.svg';
import { useState } from 'react';
import { TaskIcon } from '../types/task.type';

function TaskButton({ iconType }: { iconType: TaskIcon }) {
  const [iconSrc] = useState(iconType === 0 ? PlusIcon : CheckIcon);

  return (
    <IconButton
      bg='#0F52BA'
      size={'lg'}
      _hover={{ opacity: '0.8' }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      aria-label='icon-btn'
    >
      <ReactSVG beforeInjection={(svg) => svg.classList.add('p-1')} color='black' src={iconSrc} />
    </IconButton>
  );
}

export default TaskButton;
