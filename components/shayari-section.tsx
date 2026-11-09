'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Moon } from 'lucide-react'
import { SectionHeading } from './section-heading'

const SHAYARI = [
  ['Raat bhar chaand ko takta raha main,', 'phir yaad aaya... mera chaand to tum ho.'],
  ['Chaand mein to daag bhi hain, adhoora bhi hai woh,', 'tum poori ho Poornima, tummein koi kami nahi.'],
  ['Phone pe bas tumhara naam dikh jaaye,', 'pata nahi kyun, apne aap smile aa jaati hai.'],
  ['Tum paas ho to chai bhi meethi lagti hai,', 'warna cheeni daal ke bhi kuch kami si rehti hai.'],
  ['Bheed mein bhi bas tumhe hi dhoondhti hain aankhein,', 'aadat si ho gayi hai, ab chhootti hi nahi.'],
  ['Kitni baar socha dil ki baat keh doon,', 'tum muskura deti ho, aur main bhool jaata hoon kya kehna tha.'],
  ['Zyada kuch nahi kehta, bas itna samajh lo,', 'subah ka pehla aur raat ka aakhri khayal, dono tum ho.'],
  ['Tumse baat karke jo sukoon milta hai na,', 'woh maine kahin aur dhoondha hi nahi, kabhi.'],
]

export function ShayariSection() {
  const [index, setIndex] = useState(0)
  const go = (dir: number) => setIndex((i) => (i + dir + SHAYARI.length) % SHAYARI.length)
  const [line1, line2] = SHAYARI[index]

  return (
    <section id="shayari" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Dil se, seedha" title="Kuch lines, sirf tumhare liye" />

      <div className="glass relative mt-12 overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16 md:py-20">
        <Moon className="absolute -top-6 -right-6 size-40 text-gold/5" aria-hidden="true" />
        <span className="font-serif text-7xl leading-none text-gold/40" aria-hidden="true">
          {'\u201C'}
        </span>
        <blockquote key={index} className="animate-in fade-in slide-in-from-bottom-3 duration-700" aria-live="polite">
          <p className="text-2xl leading-relaxed text-foreground md:text-4xl md:leading-relaxed">{line1}</p>
          <p className="mt-2 text-2xl leading-relaxed text-gold md:text-4xl md:leading-relaxed">{line2}</p>
        </blockquote>
        <p className="mt-8 text-sm tracking-widest text-muted-foreground">— Avadesh</p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
          >
            <ChevronLeft className="size-5" />
            <span className="sr-only">Pichhli shayari</span>
          </button>
          <div className="flex gap-2">
            {SHAYARI.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Shayari ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-gold' : 'w-2 bg-gold/30'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
          >
            <ChevronRight className="size-5" />
            <span className="sr-only">Agli shayari</span>
          </button>
        </div>
      </div>
    </section>
  )
}
