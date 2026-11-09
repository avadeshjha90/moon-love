'use client'

import { Heart, Sparkles } from 'lucide-react'
import { useMemo } from 'react'

export function HeartsRain({ count = 40 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 26,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 4,
        sparkle: i % 4 === 0,
        rose: i % 3 !== 0,
      })),
    [count],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {items.map((h) => {
        const Icon = h.sparkle ? Sparkles : Heart
        return (
          <Icon
            key={h.id}
            className={`animate-rise absolute -bottom-10 ${h.rose ? 'fill-rose text-rose' : 'fill-gold text-gold'}`}
            style={{
              left: `${h.left}%`,
              width: h.size,
              height: h.size,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              animationIterationCount: 'infinite',
            }}
          />
        )
      })}
    </div>
  )
}
