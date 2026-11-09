export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-rose">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl italic text-balance md:text-5xl">
        <span className="text-gold-gradient">{title}</span>
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  )
}
