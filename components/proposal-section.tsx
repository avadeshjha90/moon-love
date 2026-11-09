'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { HeartsRain } from './hearts-rain'

const NO_TEXTS = [
  'Nahi',
  'Pakka?',
  'Ek baar aur soch lo',
  'Itna bhi kya gussa?',
  'Dil toot jayega yaar',
  'Chaand bhi naraz ho gaya',
  'Ye button bhi mana kar raha hai',
  'Ab to haan bol do na please',
]

export function ProposalSection() {
  const [noCount, setNoCount] = useState(0)
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null)
  const [accepted, setAccepted] = useState(false)

  const dodge = () => {
    setNoCount((c) => c + 1)
    setNoPos({ x: (Math.random() - 0.5) * 260, y: (Math.random() - 0.5) * 160 })
  }

  const yesScale = Math.min(1 + noCount * 0.15, 2)

  if (accepted) {
    return (
      <section id="proposal" className="relative mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <HeartsRain />
        <div className="animate-pop-in">
          <Heart className="mx-auto size-20 fill-rose text-rose drop-shadow-[0_0_30px_oklch(0.8_0.09_10/0.8)]" />
        </div>
        <h2 className="animate-in fade-in slide-in-from-bottom-4 mt-8 font-serif text-5xl italic delay-300 duration-1000 fill-mode-both md:text-7xl">
          <span className="text-gold-gradient">She said yes!</span>
        </h2>
        <div className="glass animate-in fade-in slide-in-from-bottom-6 mt-10 rounded-3xl p-8 text-left delay-700 duration-1000 fill-mode-both md:p-12">
          <p className="font-serif text-2xl italic text-gold">Poornima,</p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            Sach bolun to ye sab banate waqt bahut darr lag raha tha ki pata nahi tum kya sochogi. Par ab tumne haan bol
            diya hai, to main shayad aaj raat so bhi nahi paunga.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            Bade bade waade nahi karunga. Bas itna pakka hai ki tumhe kabhi akela feel nahi hone dunga, tumhari har
            baat sununga, aur roz tumhe thoda aur pareshaan karunga. Deal?
          </p>
          <p className="mt-8 text-right font-serif text-xl italic text-rose">— Hamesha tumhara, Avadesh</p>
        </div>
      </section>
    )
  }

  return (
    <section id="proposal" className="relative mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-rose">Sabse zaroori sawaal</p>
      <h2 className="mt-6 font-serif text-4xl italic leading-tight text-balance md:text-6xl">
        Toh Poornima,
        <span className="text-gold-gradient block pt-2">will you be mine?</span>
      </h2>
      <p className="mt-6 max-w-lg text-lg text-muted-foreground text-pretty">
        Bahut time se kehna chahta tha, aaj finally himmat kar li. I really, really like you. Kya tum meri girlfriend
        banogi?
        <span className="block pt-1 text-foreground/80">— Avadesh</span>
      </p>

      <div className="relative mt-14 flex h-48 w-full items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => setAccepted(true)}
          style={{ transform: `scale(${yesScale})` }}
          className="z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-gold px-10 py-4 text-lg font-semibold text-primary-foreground shadow-[0_10px_50px_-10px_oklch(0.8_0.09_10/0.7)] transition-transform duration-300 hover:brightness-110"
        >
          <Heart className="size-5 fill-current" />
          Haan
        </button>
        <button
          type="button"
          onMouseEnter={dodge}
          onClick={dodge}
          style={noPos ? { transform: `translate(${noPos.x}px, ${noPos.y}px)` } : undefined}
          className="rounded-full border border-gold/30 px-8 py-4 text-muted-foreground transition-transform duration-300 ease-out"
        >
          {NO_TEXTS[Math.min(noCount, NO_TEXTS.length - 1)]}
        </button>
      </div>
      {noCount > 2 && (
        <p className="animate-in fade-in mt-2 text-sm text-muted-foreground">
          Psst... &quot;Nahi&quot; button kaam nahi karta. Sirf &quot;Haan&quot; ka option hai.
        </p>
      )}
    </section>
  )
}
