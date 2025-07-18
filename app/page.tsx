export default function Home() {
  return (
    <div className='flex h-full w-full items-center justify-center px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20'>
      <div className='flex w-full max-w-6xl flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10 lg:gap-12'>
        <div className='flex flex-col gap-2 text-[clamp(1.5rem,6vw,5rem)] leading-[0.85] font-bold tracking-tight sm:gap-3 sm:leading-[0.9] md:leading-tight'>
          <h1 className='whitespace-nowrap'>I'M A HUMAN</h1>
          <h1 className='whitespace-nowrap'>FRONTEND DEVELOPER</h1>
        </div>
        <p className='max-w-5xl text-[clamp(1rem,3.5vw,3rem)] leading-tight font-bold tracking-wide'>
          CRAFTING INTUITIVE UIs & SLEEK CODE.
        </p>
      </div>
    </div>
  );
}
