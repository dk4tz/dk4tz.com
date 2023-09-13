import { Portrait } from '../components/Portrait';

export const HomePage = () => {
  console.log(
    'Hello Anon, \n\n Welcome to my humble digital abode. Please enjoy the dino. \n\n -dk4tz'
  );
  return (
    // <div className='page-container flex h-screen w-screen flex-row flex-nowrap'>
    <>
      <Portrait />
      <p className='text-center text-2xl text-black'>HELLO</p>
    </>
    // </div>
  );
};
