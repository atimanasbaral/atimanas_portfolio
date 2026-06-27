// components/MangaBubble.tsx
'use client'

interface MangaBubbleProps {
  lines: string[]
  className?: string
}

export default function MangaBubble({ lines, className = '' }: MangaBubbleProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Bubble body */}
      <div
        className="max-w-[180px] rounded-2xl border-2 border-black bg-white px-4 py-3 text-black"
      >
        {lines.map((line, i) => (
          <p key={i} className="text-sm leading-snug m-0">{line}</p>
        ))}
      </div>
      {/* Tail pointing down-left */}
      <div
        className="absolute -bottom-4 left-8"
        style={{
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '16px solid black',
        }}
      />
      <div
        className="absolute -bottom-3 left-[34px]"
        style={{
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '14px solid white',
        }}
      />
    </div>
  )
}