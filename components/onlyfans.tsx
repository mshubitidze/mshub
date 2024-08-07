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
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogDescription className="p-2">
            <Image
              src="https://utfs.io/f/724b644c-0dac-438f-823f-3e16121c5f1f-9vwvm6.gif"
              alt="caught in 4k"
              width={220}
              height={220}
              className="max-w-96 md:size-96"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
