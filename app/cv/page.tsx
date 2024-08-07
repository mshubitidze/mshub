import { redirect } from 'next/navigation'
import { cv } from '../../lib/constants'

export default function Page() {
  return redirect(cv)
}
