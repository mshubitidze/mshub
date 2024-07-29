import { MotionP } from './lib/framer'

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
      <div>
        <div className="mb-16">
          <h1 className="text-lg font-bold">misho shubitidze</h1>
          <p className="font-semibold text-zinc-400">design engineer</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold">about me</h2>
        <div className="flex items-center">
          <MotionP
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            i use{' '}
            <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#16B0ED,45%,#367533,55%,#88C649)] bg-[length:200%_100%] bg-clip-text text-transparent">
              neovim
            </span>
          </MotionP>
          <MotionP
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: 'backOut',
              delay: 0.7,
              duration: 0.2,
            }}
          >
            , btw
          </MotionP>
        </div>
      </div>
      <div className="my-16">
        <a href="https://x.com/_mshub" target="_blank">
          twitter &rarr;
        </a>
        <a
          className="ml-8"
          href="https://github.com/mshubitidze"
          target="_blank"
        >
          github &rarr;
        </a>
      </div>
    </main>
  )
}
