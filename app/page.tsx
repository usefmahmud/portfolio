import { Me } from '@/components/misc/me';

export default function Home() {
  return (
    <div className='px-20 py-35'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2 text-[50px] leading-[53px] font-bold'>
            <h2>I'M A HUMAN</h2>
            <h2>FRONTEND DEVELOPER</h2>
          </div>
          <p className='text-[40px] font-bold'>
            CRAFTING INTUITIVE UIs & SLEEK CODE.
          </p>
        </div>

        <div>
          <div className='text-foreground h-40'>
            <Me />
          </div>
        </div>
      </div>
    </div>
  );
}
