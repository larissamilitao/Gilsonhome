import { useState, useEffect } from 'react';
import AOS from 'aos';
import svgPaths from '../../imports/Home/svg-pie7oz5h7g';

// Color mapping for each letter/card pair
const COLORS = {
  G: '#6F4AE6', // purple - Passo 1
  I: '#FF791B', // orange - Passo 2
  L: '#31BF71', // green - Passo 3
  S: '#2EA6FF', // light blue - Passo 4
  O: '#D62A70', // pink - Passo 5
  N: '#FFD23C', // yellow - Passo 6
} as const;

const NEUTRAL_COLOR = '#EEF1F7';

type LetterKey = keyof typeof COLORS;

interface InteractiveGilsonProps {
  hoveredItem: LetterKey | null;
  onHover: (letter: LetterKey | null) => void;
}

function InteractiveGilson({ hoveredItem, onHover }: InteractiveGilsonProps) {
  const getLetterColor = (letter: LetterKey) => {
    if (hoveredItem === null) return COLORS[letter];
    return hoveredItem === letter ? COLORS[letter] : NEUTRAL_COLOR;
  };

  const getLetterStyle = (letter: LetterKey): React.CSSProperties => ({
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    pointerEvents: 'auto' as const,
    filter: hoveredItem === letter ? 'drop-shadow(0 0 2px rgba(0,0,0,0.3))' : 'none',
  });

  return (
    <div className="h-[114.563px] relative shrink-0 w-[610.631px]" data-name="GILSON" data-aos="zoom-in">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 610.631 114.563">
        <g id="GILSON">
          {/* N - yellow */}
          <path
            d={svgPaths.p3ade0880}
            fill={getLetterColor('N')}
            style={getLetterStyle('N')}
            onMouseEnter={() => onHover('N')}
            onMouseLeave={() => onHover(null)}
          />
          {/* O - pink */}
          <path
            d={svgPaths.p38006500}
            fill={getLetterColor('O')}
            style={getLetterStyle('O')}
            onMouseEnter={() => onHover('O')}
            onMouseLeave={() => onHover(null)}
          />
          {/* S - light blue */}
          <path
            d={svgPaths.pdd05500}
            fill={getLetterColor('S')}
            style={getLetterStyle('S')}
            onMouseEnter={() => onHover('S')}
            onMouseLeave={() => onHover(null)}
          />
          {/* L - green */}
          <path
            d={svgPaths.p21331a00}
            fill={getLetterColor('L')}
            style={getLetterStyle('L')}
            onMouseEnter={() => onHover('L')}
            onMouseLeave={() => onHover(null)}
          />
          {/* I - orange */}
          <path
            d={svgPaths.p3b2daf00}
            fill={getLetterColor('I')}
            style={getLetterStyle('I')}
            onMouseEnter={() => onHover('I')}
            onMouseLeave={() => onHover(null)}
          />
          {/* G - purple */}
          <path
            d={svgPaths.p281dc880}
            fill={getLetterColor('G')}
            style={getLetterStyle('G')}
            onMouseEnter={() => onHover('G')}
            onMouseLeave={() => onHover(null)}
          />
        </g>
      </svg>
    </div>
  );
}

interface InteractiveCardProps {
  letter: LetterKey;
  step: number;
  title: string;
  deadline: string;
  hoveredItem: LetterKey | null;
  onHover: (letter: LetterKey | null) => void;
  bgColor: string;
  gridPosition: string;
  delay: number;
}

function InteractiveCard({
  letter,
  step,
  title,
  deadline,
  hoveredItem,
  onHover,
  bgColor,
  gridPosition,
  delay,
}: InteractiveCardProps) {
  const isHovered = hoveredItem === letter;
  const isOtherHovered = hoveredItem !== null && hoveredItem !== letter;

  const cardStyle: React.CSSProperties = {
    opacity: isOtherHovered ? 0.4 : 1,
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const borderStyle: React.CSSProperties = {
    borderColor: isHovered ? COLORS[letter] : '#eef1f7',
    borderWidth: isHovered ? '2px' : '0.5px',
    transition: 'all 0.3s ease',
  };

  const shadowStyle = isHovered
    ? { boxShadow: `0 8px 24px rgba(0, 0, 0, 0.12)` }
    : {};

  return (
    <div
      className={`${bgColor} ${gridPosition} justify-self-stretch relative rounded-[16px] self-start shrink-0`}
      data-name="metodo-card"
      data-aos="fade-up"
      data-aos-delay={delay}
      style={{ ...cardStyle, ...shadowStyle }}
      onMouseEnter={() => onHover(letter)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[32px] py-[24px] relative w-full">
          <div
            className="content-stretch flex items-center px-[14px] py-[4px] relative rounded-[999px] shrink-0"
            style={{ backgroundColor: COLORS[letter] }}
            data-name="metodo-prazo"
          >
            <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              Passo {step}
            </p>
          </div>
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1f2738] text-[18px] w-[min-content]">
            {title}
          </p>
          <p className="font-['Funnel_Sans:Medium',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#303d57] text-[16px] w-[min-content]">
            {deadline}
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-solid inset-0 pointer-events-none rounded-[16px]"
        style={borderStyle}
      />
    </div>
  );
}

export default function InteractiveMetodo() {
  const [hoveredItem, setHoveredItem] = useState<LetterKey | null>(null);

  // Refresh AOS when component mounts to detect dynamic elements
  useEffect(() => {
    AOS.refresh();
  }, []);

  const cards = [
    { letter: 'G' as LetterKey, step: 1, title: 'Governar com liderança', deadline: 'Até o 15º dia', bgColor: 'bg-[#ede8fc]', gridPosition: 'col-1 row-1', delay: 100 },
    { letter: 'I' as LetterKey, step: 2, title: 'Integrar o que já existe', deadline: 'Até o 25º dia', bgColor: 'bg-[#fff0e5]', gridPosition: 'col-2 row-1', delay: 200 },
    { letter: 'L' as LetterKey, step: 3, title: 'Levantar dados básicos', deadline: 'Até o 35º dia', bgColor: 'bg-[#eafaf1]', gridPosition: 'col-3 row-1', delay: 300 },
    { letter: 'S' as LetterKey, step: 4, title: 'Sistematizar o plano', deadline: 'Até o 60º dia', bgColor: 'bg-[#e5f4ff]', gridPosition: 'col-1 row-2', delay: 100 },
    { letter: 'O' as LetterKey, step: 5, title: 'Orçar as ações', deadline: 'Até o 75º dia', bgColor: 'bg-[#fbe9f0]', gridPosition: 'col-2 row-2', delay: 200 },
    { letter: 'N' as LetterKey, step: 6, title: 'Núcleo de monitoramento', deadline: 'Até o 100º dia', bgColor: 'bg-[#fff9e5]', gridPosition: 'col-3 row-2', delay: 300 },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full">
      <InteractiveGilson hoveredItem={hoveredItem} onHover={setHoveredItem} />
      <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full" data-name="metodo-grid">
        {cards.map((card) => (
          <InteractiveCard
            key={card.letter}
            {...card}
            hoveredItem={hoveredItem}
            onHover={setHoveredItem}
          />
        ))}
      </div>
    </div>
  );
}
