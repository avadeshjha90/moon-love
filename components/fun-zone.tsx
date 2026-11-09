'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Heart, Calculator, Gamepad2, Wand2, RotateCcw } from 'lucide-react'
import { SectionHeading } from './section-heading'

export function FunZone() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Thoda masti" title="Fun Zone" />
      <p className="mx-auto mt-6 max-w-lg text-center text-muted-foreground">
        Itna serious bhi nahi hona. Thoda khelo, thoda hasso, aur haan, results pe sawaal mat karna.
      </p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <LoveCalculator />
        <CatchHearts />
        <ComplimentMachine />
      </div>
    </section>
  )
}

function Card({ icon: Icon, title, children }: { icon: typeof Heart; title: string; children: React.ReactNode }) {
  return (
    <div className="glass flex flex-col rounded-3xl p-7">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-rose/15 text-rose">
          <Icon className="size-5" />
        </div>
        <h3 className="font-serif text-2xl italic">{title}</h3>
      </div>
      <div className="mt-6 flex flex-1 flex-col">{children}</div>
    </div>
  )
}

const CALC_MESSAGES = [
  'Machine bhi maan gayi, ye jodi to upar se fix hai.',
  'Error: itna pyaar measure karne ka scale hi nahi hai.',
  'Result aa gaya. Ab argue mat karna, machine kabhi galat nahi hoti.',
]

const LOW_MESSAGES = [
  'Ye jodi bekaar hai bhai. Machine ne bhi haath jod liye.',
  'Itna kam? Isse zyada chemistry toh doodh aur nimbu mein hai.',
  'Rehne do yaar, ye jodi sirf "Hi" "Hello" tak hi sahi hai.',
  'Error 404: Pyaar not found. Naam wapas sahi daalo.',
  'Calculator bol raha hai, ye rishta chalega nahi, daudega bhi nahi.',
  'Bas dost bane raho, wahi safe hai dono ke liye.',
  'Ye combination dekh ke toh mera battery bhi low ho gaya.',
]

const normalize = (s: string) => s.trim().toLowerCase()

function isTheRealPair(a: string, b: string) {
  const pair = [normalize(a), normalize(b)].sort().join('|')
  return pair === ['avadesh', 'poornima'].sort().join('|')
}

function LoveCalculator() {
  const [his, setHis] = useState('Avadesh')
  const [her, setHer] = useState('Poornima')
  const [value, setValue] = useState<number | null>(null)
  const [target, setTarget] = useState(100)
  const [lowMessage, setLowMessage] = useState('')
  const [running, setRunning] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current)
  }, [])

  const calculate = () => {
    if (running) return
    const realPair = isTheRealPair(his, her)
    const goal = realPair ? 100 : Math.floor(Math.random() * 26) + 3
    setTarget(goal)
    setLowMessage(realPair ? '' : LOW_MESSAGES[Math.floor(Math.random() * LOW_MESSAGES.length)])
    setRunning(true)
    let v = 0
    timer.current = setInterval(() => {
      v += Math.ceil(Math.random() * (realPair ? 6 : 2))
      if (v >= goal) {
        v = goal
        if (timer.current) clearInterval(timer.current)
        setRunning(false)
      }
      setValue(v)
    }, 40)
  }

  const done = value !== null && !running && value === target

  const inputClass =
    'w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none'

  return (
    <Card icon={Calculator} title="Love Calculator">
      <label className="sr-only" htmlFor="his-name">Ladke ka naam</label>
      <input id="his-name" value={his} onChange={(e) => setHis(e.target.value)} className={inputClass} />
      <Heart className="mx-auto my-3 size-5 fill-rose text-rose" aria-hidden="true" />
      <label className="sr-only" htmlFor="her-name">Ladki ka naam</label>
      <input id="her-name" value={her} onChange={(e) => setHer(e.target.value)} className={inputClass} />

      <button
        type="button"
        onClick={calculate}
        disabled={running}
        className="mt-5 rounded-full bg-gold py-3 font-medium text-primary-foreground transition-all hover:brightness-110 disabled:opacity-70"
      >
        {running ? 'Calculate ho raha hai...' : 'Pyaar Calculate Karo'}
      </button>

      <div className="mt-6 min-h-24 text-center" aria-live="polite">
        {value !== null && (
          <>
            <p className="font-serif text-5xl text-gold-gradient">{value}%</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-to-r from-rose to-gold transition-all" style={{ width: `${value}%` }} />
            </div>
            {done && target === 100 && (
              <p className="animate-in fade-in mt-3 text-sm text-foreground/85">
                {CALC_MESSAGES[(his.length + her.length) % CALC_MESSAGES.length]}
              </p>
            )}
            {done && target < 100 && (
              <p className="animate-in fade-in mt-3 text-sm text-rose">{lowMessage}</p>
            )}
          </>
        )}
      </div>
    </Card>
  )
}

const GOAL = 10

function CatchHearts() {
  const [score, setScore] = useState(0)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [started, setStarted] = useState(false)

  const move = useCallback(() => {
    setPos({ x: 10 + Math.random() * 80, y: 12 + Math.random() * 76 })
  }, [])

  useEffect(() => {
    if (!started || score >= GOAL) return
    const id = setInterval(move, 900)
    return () => clearInterval(id)
  }, [started, score, move])

  const catchHeart = () => {
    setScore((s) => s + 1)
    move()
  }

  const reset = () => {
    setScore(0)
    setStarted(true)
    move()
  }

  const won = score >= GOAL

  return (
    <Card icon={Gamepad2} title="Dil Pakdo">
      <p className="text-sm text-muted-foreground">
        {GOAL} dil pakdo aur ek secret message unlock karo. Dil bhaagta hai, jaldi karna!
      </p>
      <div className="relative mt-4 h-64 overflow-hidden rounded-2xl border border-gold/20 bg-background/40">
        {!started ? (
          <button
            type="button"
            onClick={reset}
            className="absolute inset-0 m-auto h-fit w-fit rounded-full border border-gold/40 px-6 py-3 text-gold transition-colors hover:bg-gold/10"
          >
            Game Shuru Karo
          </button>
        ) : won ? (
          <div className="animate-pop-in absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center">
            <Heart className="size-10 fill-rose text-rose" />
            <p className="font-serif text-xl italic text-gold">Secret Unlocked</p>
            <p className="text-foreground/90">
              10 dil pakad liye, nice. Waise mera wala to tumne bina game khele hi le liya tha.
            </p>
          </div>
        ) : (
          <button
            type="button"
            onClick={catchHeart}
            className="absolute -translate-x-1/2 -translate-y-1/2 p-2 transition-all duration-300 ease-out"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            <Heart className="size-9 fill-rose text-rose drop-shadow-[0_0_12px_oklch(0.8_0.09_10/0.8)]" />
            <span className="sr-only">Dil pakdo</span>
          </button>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Score: <span className="font-medium text-gold">{Math.min(score, GOAL)}</span> / {GOAL}
        </p>
        {started && (
          <button type="button" onClick={reset} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold">
            <RotateCcw className="size-4" /> Dobara
          </button>
        )}
      </div>
    </Card>
  )
}

const COMPLIMENTS = [
  'Tum hasti ho to chaand bhi thoda jealous ho jaata hai.',
  'Tumhari smile ka WiFi password kya hai? Dil connect karna tha.',
  'Tum chai ho, aur main woh banda jo chai ke bina kaam nahi karta.',
  'Agar cuteness crime hota, to tum ab tak andar hoti.',
  'Tum meri favourite notification ho. Baaki sab mute pe hain.',
  'Tumhare bina life bina masale ki Maggi hai. Chal jaati hai, par mazaa nahi.',
  'Poornima mahine mein ek baar aati hai. Tum roz aati ho, lucky hoon main.',
  'Mummy ko abhi nahi bataya, par tumhe dekh ke woh bhi haan bol dengi.',
  'Tumse jhagda bhi karna ho to pehle tumhari pic dekh leta hoon. Gussa gayab.',
  'Main overthink karta hoon, aur zyada time tumhare baare mein hi.',
]

function ComplimentMachine() {
  const [i, setI] = useState<number | null>(null)
  const [spin, setSpin] = useState(0)

  const next = () => {
    setSpin((s) => s + 1)
    setI((prev) => {
      let n = Math.floor(Math.random() * COMPLIMENTS.length)
      if (n === prev) n = (n + 1) % COMPLIMENTS.length
      return n
    })
  }

  return (
    <Card icon={Wand2} title="Tareef Machine">
      <p className="text-sm text-muted-foreground">Button dabao, ek tareef free. Stock khatam nahi hoga, promise.</p>
      <div className="mt-4 flex flex-1 items-center justify-center rounded-2xl border border-gold/20 bg-background/40 p-6 text-center">
        {i === null ? (
          <p className="text-muted-foreground">Yahan tumhari tareef aayegi...</p>
        ) : (
          <p key={spin} className="animate-in fade-in zoom-in-95 font-serif text-xl italic leading-relaxed text-foreground duration-500" aria-live="polite">
            {COMPLIMENTS[i]}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={next}
        className="mt-5 rounded-full border border-gold/40 py-3 font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
      >
        {i === null ? 'Tareef Suno' : 'Ek Aur'}
      </button>
    </Card>
  )
}
