import Link from 'next/link';
export default async function Home() {

  return (
    <div className="flex flex-col items-center  overflow-hidden justify-center min-h-screen ">
      Todo Application
      <br />
      <br />
      <div className='flex flex-col gap-2.5 '>
        <Link className='border bg-blue-500 text-white p-1.5  font-bold'  href='/signin'>Sign-in to todo app</Link>
        <Link className='border bg-blue-500 text-white p-1.5  font-bold'  href='/signup'>Sign-up to todo app</Link>
      </div>
    </div>
    
  );
}
