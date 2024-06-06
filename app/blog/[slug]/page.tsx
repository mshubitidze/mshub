import { slugify } from '@/app/lib/utils'
import { titles } from '../data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const valid = titles.map((title) => slugify(title))

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  if (!valid.includes(params.slug)) notFound()

  return (
    <main className="px-2">
      <Link href="/blog">&larr; back</Link>
      <section className="my-8">
        <h1 className="mb-8 text-2xl font-semibold">{params.slug}</h1>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </section>
    </main>
  )
}

export function generateStaticParams() {
  return valid.map((val) => ({
    slug: val,
  }))
}
