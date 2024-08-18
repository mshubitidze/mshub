import { redirect } from 'next/navigation'
import { github } from '@/lib/constants'

export default function Page() {
  return redirect(github)
}
