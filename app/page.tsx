import { Me } from '@/components/misc/me';

export default function Home() {
  return (
    <div className='flex h-full w-full items-center justify-center px-3 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 xl:px-16 2xl:px-20'>
      <div className='max-w-8xl flex h-full w-full flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row lg:justify-between lg:gap-12 xl:gap-16'>
        <div className='flex flex-1 flex-col gap-2 text-center sm:gap-3 md:gap-4 lg:max-w-2xl lg:gap-6 lg:text-left'>
          <div className='flex flex-col gap-1 text-[clamp(1.25rem,5vw,4rem)] leading-[0.9] font-bold tracking-tight sm:gap-2 sm:leading-tight'>
            <h1 className='whitespace-nowrap'>I'M A HUMAN</h1>
            <h1 className='whitespace-nowrap'>FRONTEND DEVELOPER</h1>
          </div>
          <p className='text-[clamp(0.875rem,3vw,2.75rem)] leading-tight font-bold tracking-wide'>
            CRAFTING INTUITIVE UIs & SLEEK CODE.
          </p>
        </div>

        <div className='aspect-[320/546] w-full max-w-[280px] flex-shrink-0 sm:max-w-[320px] md:max-w-[360px] lg:aspect-[320/500] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px]'>
          <div className='text-foreground flex h-full w-full items-center justify-center'>
            <Me />
          </div>
        </div>
      </div>
    </div>
  );
}
