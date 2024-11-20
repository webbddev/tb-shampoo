import Image from 'next/image';
import flourishSvg from './flourish.svg';

const FlourishIcon = () => {
  return (
    <div className='flex items-center justify-center w-9/12 mx-auto gap-x-3'>
      <hr className='flex-1 border-t border-gray-300' />
      <Image
        src={flourishSvg}
        height={32}
        width={32}
        alt='Flourish Icon'
        className='h-24 w-24 xl:h-28 xl:w-28 2xl:h-32 2xl:w-32'
      />
      <hr className='flex-1 border-t border-gray-300' />
    </div>
  );
};

export default FlourishIcon;


// design by Valeriy from <a href="https://thenounproject.com/browse/icons/term/design/" target="_blank" title="design Icons">Noun Project</a> (CC BY 3.0)
