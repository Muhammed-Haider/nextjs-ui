
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

export default function Home(){



  return <>
   
  <div className='flex justify-center items-center min-h-screen p-12 bg-gray-100'>
    <div className='flex flex-col max-w-[48rem]  md:flex-row  bg-white rounded-xl'>
      <div className='flex-[40%]'>
    <img  className='w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl' src='https://res.cloudinary.com/thirus/image/upload/v1632854291/logos/drawers_gr2wn5.jpg'></img>
    </div>
    <div className='p-9 flex-[60%]'>
      <h1 className='text-[1.4rem] leading-snug font-bold text-gray-600'>Shift the overall look and feel by<br/> adding these wonderful touches to <br/>furniture in your home</h1>
      <p className='mt-3 text-gray-500 text-sm'>Ever been in a room and felt like something was missing?<br/> Perhaps it felt slightly bare and uninviting.I've got some<br/> simple tips to help you make any room feel complete.</p>
      <div className='mt-6 leading-none flex items-center'>
      <img className='h-16 w-16 rounded-full' src='https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/avatar-michelle_qcobnu.jpg'></img>
      <div className='flex flex-col items-center  ml-4'>
      <span className='text-sm font-bold text-gray-600'>Michelle Appleton</span>
      <span className='text-sm text-gray-400 mr-9'>28 Jun 2020</span>
      <div/>

      </div>
      <div className='p-3 bg-gray-100 rounded-full self-end'>
      <img src="https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/icon-share_frvrfu.svg" alt="Garden Image"  />
       </div>
      </div>
      </div>
    </div>
  </div>
  





  
  
  </>
}

