'use client'

import { Heart } from 'lucide-react'

export function IntroGate({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-6">
      <div className="animate-in fade-in zoom-in-95 duration-1000 flex max-w-md flex-col items-center gap-8 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Ek khaas surprise</p>
        <h1 className="font-serif text-5xl italic leading-tight text-balance md:text-6xl">
          <span className="text-gold-gradient">Poornima</span>
          <span className="block pt-2 text-2xl not-italic text-foreground/90 md:text-3xl">ye sirf tumhare liye hai</span>
        </h1>
        <button
          type="button"
          onClick={onOpen}
          className="group relative flex size-28 items-center justify-center rounded-full border border-gold/40 bg-card/60 backdrop-blur-md transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-gold/40 focus-visible:outline-none"
        >
          <span className="absolute inset-0 animate-ping rounded-full border border-gold/30" />
          <Heart className="size-11 fill-rose text-rose transition-transform group-hover:scale-110" />
          <span className="sr-only">Surprise kholo</span>
        </button>
        <p className="text-muted-foreground">Dil pe tap karo</p>
      </div>
    </div>
  )
}
