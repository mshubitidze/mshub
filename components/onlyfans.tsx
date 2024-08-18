import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'

export function Onlyfans() {
  return (
    <Dialog>
      <DialogTrigger className="whitespace-nowrap">
        onlyfans &rarr;
      </DialogTrigger>
      <DialogContent className="max-w-96 border-none bg-transparent shadow-none md:size-[600px] md:max-w-full [&>*>svg]:size-10 [&>*>svg]:text-white">
        <DialogHeader>
          <DialogDescription className="p-10">
            <Image
              src="https://utfs.io/f/724b644c-0dac-438f-823f-3e16121c5f1f-9vwvm6.gif"
              alt="caught in 4k"
              width={220}
              height={220}
              className="h-full w-full"
              unoptimized
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
