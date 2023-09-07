// links
import Link from "next/link";

// icons
import {
  RiLinkedinLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const Socials = () => {
  return ( 
  <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://wa.me/qr/WQQKHY4G7X2LM1'} className='hover:text-accent transition-all 
    duration-300'>
      <RiWhatsappLine /> 
      </Link>
    <Link href={'https://www.linkedin.com/in/abdallah-hamadto-3132a0161/'} className='hover:text-accent transition-all 
    duration-300'>
      <RiLinkedinLine /> 
      </Link>
      <Link href={'https://www.youtube.com/@iltizaml879'} className='hover:text-accent transition-all 
    duration-300'>
      <RiYoutubeLine /> 
      </Link>
      <Link href={''} className='hover:text-accent transition-all 
    duration-300'>
      <RiFacebookLine /> 
      </Link>
      <Link href={''} className='hover:text-accent transition-all 
    duration-300'>
      <RiInstagramLine /> 
      </Link>
      </div>
  );
};

export default Socials;
