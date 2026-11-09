import { Moon, Smile, Sparkles, Heart, Star, Sun } from 'lucide-react'
import { SectionHeading } from './section-heading'

const REASONS = [
  { icon: Smile, title: 'Woh smile', text: 'Kitna bhi bekaar din ho, ek baar tum hass do, bas sab theek lagne lagta hai.' },
  { icon: Moon, title: 'Tumhara naam', text: 'Poornima matlab poora chaand. Honestly, isse better naam ho hi nahi sakta tha.' },
  { icon: Sparkles, title: 'Tumhari baatein', text: 'Random si baatein bhi tum karo to interesting lagti hain. Ghanto sun sakta hoon.' },
  { icon: Heart, title: 'Tumhara nature', text: 'Itni simple ho, itni sweet ho, ki koi bhi tumhara fan ho jaaye. Main to already hoon.' },
  { icon: Star, title: 'Tumhari aankhein', text: 'Seedha dekh lo to main bolna bhool jaata hoon. Ye complaint hai, compliment nahi.' },
  { icon: Sun, title: 'Bas tum', text: 'Koi ek reason nahi hai yaar. Tum ho, aur yahi kaafi hai.' },
]

export function ReasonsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Why you" title="Tum itni special kyun ho" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="glass group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px_oklch(0.84_0.11_85/0.35)]"
          >
            <div className="flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl italic">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
