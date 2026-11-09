'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Starfield } from './starfield'
import { IntroGate } from './intro-gate'
import { Hero } from './hero'
import { ShayariSection } from './shayari-section'
import { ReasonsSection } from './reasons-section'
import { FunZone } from './fun-zone'
import { ProposalSection } from './proposal-section'

export function ProposalExperience() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Starfield />
      {!opened ? (
        <IntroGate onOpen={() => setOpened(true)} />
      ) : (
        <main className="animate-in fade-in duration-1000">
          <Hero />
          <ShayariSection />
          <ReasonsSection />
          <FunZone />
          <ProposalSection />
          <footer className="flex items-center justify-center gap-2 pb-10 text-sm text-muted-foreground">
            Banaya pyaar se <Heart className="size-4 fill-rose text-rose" aria-label="pyaar" /> Avadesh ne, sirf Poornima ke liye
          </footer>
        </main>
      )}
    </>
  )
}
