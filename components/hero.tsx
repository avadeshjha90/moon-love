import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-24 text-center">
      <div className="animate-float-slow relative mb-8">
        <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-gold/10 blur-3xl" />
        <div className="size-48 overflow-hidden rounded-full shadow-[0_0_80px_10px_oklch(0.9_0.08_85/0.35)] md:size-64">
          <Image
            src="/images/moon.png"
            alt="Poornima ka poora chaand"
            width={420}
            height={420}
            priority
            className="size-full scale-[1.24] object-cover"
          />
        </div>
      </div>

      <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-sm uppercase tracking-[0.45em] text-muted-foreground delay-300 duration-1000">
        Avadesh ki taraf se
      </p>
      <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both mt-4 font-serif text-6xl italic leading-none delay-500 duration-1000 md:text-8xl">
        <span className="text-gold-gradient">Poornima</span>
      </h1>
      <p className="animate-in fade-in fill-mode-both mt-6 max-w-xl text-xl leading-relaxed text-foreground/85 text-pretty delay-1000 duration-1000 md:text-2xl">
        Ek chaand aasmaan mein hai, ek zameen pe bhi.
        <span className="block pt-1 text-rose">{'Sach bataun? Zameen wala zyada sundar hai.'}</span>
      </p>

      <a
        href="#shayari"
        className="absolute bottom-8 flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-gold"
      >
        Neeche dekho
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
