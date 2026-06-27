// components/MangaPanelStrip.tsx
'use client'

// These are SVG-drawn black-and-white manga scenes — no images needed
function Panel1() {
  return (
    <svg viewBox="0 0 100 90" className="w-full h-full" style={{ filter: 'grayscale(100%)' }}>
      {/* City skyline scene */}
      <rect width="100" height="90" fill="#0a0a0a"/>
      <rect x="10" y="50" width="12" height="40" fill="#1a1a1a"/>
      <rect x="25" y="40" width="10" height="50" fill="#222"/>
      <rect x="38" y="30" width="15" height="60" fill="#1a1a1a"/>
      <rect x="56" y="45" width="12" height="45" fill="#222"/>
      <rect x="71" y="35" width="18" height="55" fill="#1a1a1a"/>
      {/* Windows */}
      {[15,18,21,28,31,43,47,51,60,63,76,79,82].map((x, i) => (
        <rect key={i} x={x} y={35 + (i % 3) * 8} width="3" height="3" fill="#f0e68c" opacity="0.7"/>
      ))}
      {/* Moon */}
      <circle cx="82" cy="15" r="8" fill="#e8e8e8"/>
      <circle cx="85" cy="12" r="7" fill="#0a0a0a"/>
      {/* Stars */}
      {[20,35,50,65].map((x, i) => (
        <circle key={i} cx={x} cy={10 + (i%2)*8} r="1" fill="white" opacity="0.8"/>
      ))}
      {/* Speed lines from corner */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="0" y1={i*18} x2="40" y2="45" stroke="#333" strokeWidth="0.3" opacity="0.4"/>
      ))}
    </svg>
  )
}

function Panel2() {
  return (
    <svg viewBox="0 0 100 90" className="w-full h-full">
      {/* Close-up eye / data streams */}
      <rect width="100" height="90" fill="#f5f5f5"/>
      {/* Data stream lines */}
      {[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80].map((y, i) => (
        <line key={i} x1="0" y1={y} x2={30 + (i%5)*8} y2={y} stroke="#222" strokeWidth="0.5" opacity={0.3 + (i%3)*0.2}/>
      ))}
      {/* Eye shape */}
      <ellipse cx="50" cy="45" rx="35" ry="20" fill="none" stroke="#111" strokeWidth="2"/>
      <circle cx="50" cy="45" r="12" fill="#111"/>
      <circle cx="50" cy="45" r="8" fill="#444"/>
      <circle cx="54" cy="42" r="2.5" fill="white"/>
      {/* Lashes */}
      {[-20,-10,0,10,20].map((offset, i) => (
        <line key={i} x1={50+offset} y1="25" x2={50+offset*0.7} y2="30" stroke="#111" strokeWidth="1.5"/>
      ))}
    </svg>
  )
}

function Panel3() {
  return (
    <svg viewBox="0 0 100 90" className="w-full h-full">
      {/* Action / coding scene */}
      <rect width="100" height="90" fill="#111"/>
      {/* Screen glow */}
      <rect x="15" y="20" width="70" height="45" rx="3" fill="#0d1117"/>
      <rect x="15" y="20" width="70" height="45" rx="3" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
      {/* Code lines */}
      {[30,38,46,54,58].map((y, i) => (
        <rect key={i} x={20} y={y} width={20 + (i*8)%35} height="3" rx="1" fill={i===2 ? '#7c3aed' : '#555'} opacity="0.8"/>
      ))}
      {/* Cursor blink */}
      <rect x="55" y="46" width="2" height="8" fill="#7c3aed" opacity="0.9"/>
      {/* Action lines */}
      {[0,1,2,3].map(i => (
        <line key={i} x1={90+i*3} y1={0} x2={100} y2={i*22} stroke="#7c3aed" strokeWidth="0.5" opacity="0.3"/>
      ))}
    </svg>
  )
}

export default function MangaPanelStrip() {
  return (
    <div className="flex flex-col gap-1 h-full">
      {/* Panel borders — thick black like real manga */}
      <div className="flex-1 border-2 border-white/20 overflow-hidden" style={{ minHeight: 0 }}>
        <Panel1 />
      </div>
      <div className="flex-1 border-2 border-white/20 overflow-hidden" style={{ minHeight: 0 }}>
        <Panel2 />
      </div>
      <div className="flex-1 border-2 border-white/20 overflow-hidden" style={{ minHeight: 0 }}>
        <Panel3 />
      </div>
    </div>
  )
}