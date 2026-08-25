type Floor = "main" | "upper";

const S = 10;
const OX = 56;
const OY = 48;

export function FloorPlan({ floor }: { floor: Floor }) {
  const title = floor === "main" ? "Main floor" : "Upper floor";
  return (
    <svg
      viewBox="0 0 640 470"
      role="img"
      aria-label={`The Snowline Chalet ${title} schematic, 48 feet by 34 feet`}
      className="h-auto w-full"
    >
      <rect width="640" height="470" fill="var(--color-cream)" />
      <g transform={`translate(${OX} ${OY}) scale(${S})`}>
        <Poche />
        {floor === "main" ? <MainRooms /> : <UpperRooms />}
        <Windows />
        {floor === "main" ? <MainFurniture /> : <UpperFurniture />}
        {floor === "main" ? <MainDoors /> : <UpperDoors />}
        <Stairs up={floor === "main"} />
        <Dimensions />
      </g>
      <TitleBlock floor={floor} />
      <Compass />
      <ScaleBar />
    </svg>
  );
}

function Poche() {
  return <rect x={0} y={0} width={48} height={34} fill="var(--color-ink)" />;
}

function MainRooms() {
  return (
    <g>
      <rect x={0.5} y={0.5} width={13} height={17} fill="var(--color-cream)" />
      <rect x={14} y={0.5} width={33.5} height={17} fill="var(--color-cream)" />
      <rect x={0.5} y={18} width={13} height={15.5} fill="var(--color-cream)" />
      <rect x={14} y={18} width={7.5} height={7.4} fill="var(--color-cream)" />
      <rect x={14} y={26} width={7.5} height={7.5} fill="var(--color-cream)" />
      <rect x={22} y={18} width={7.5} height={15.5} fill="var(--color-cream)" />
      <rect x={30} y={18} width={17.5} height={15.5} fill="var(--color-cream)" />
      {/* cased opening kitchen → great room */}
      <rect x={13.35} y={9} width={0.9} height={7} fill="var(--color-cream)" />
      {/* hall from great room to stair */}
      <rect x={23} y={17.35} width={4.5} height={0.9} fill="var(--color-cream)" />
      {/* mud → stair */}
      <rect x={29.35} y={24} width={0.9} height={4} fill="var(--color-cream)" />
      {/* fireplace mass */}
      <rect x={13.5} y={2.6} width={2.2} height={5.2} fill="var(--color-ink)" />
      <rect
        x={15.4}
        y={3.4}
        width={0.55}
        height={3.6}
        fill="var(--color-paper-deep)"
      />
    </g>
  );
}

function UpperRooms() {
  return (
    <g>
      <rect x={0.5} y={0.5} width={13} height={17} fill="var(--color-cream)" />
      <rect
        x={14}
        y={0.5}
        width={33.5}
        height={17}
        fill="var(--color-paper-deep)"
      />
      <rect x={0.5} y={18} width={13} height={15.5} fill="var(--color-cream)" />
      <rect x={14} y={18} width={7.5} height={15.5} fill="var(--color-cream)" />
      <rect x={22} y={18} width={7.5} height={15.5} fill="var(--color-cream)" />
      <rect x={30} y={18} width={17.5} height={15.5} fill="var(--color-cream)" />
      {/* loft balcony into the great-room void */}
      <rect x={22} y={13} width={16} height={5} fill="var(--color-cream)" />
      {/* stair opening */}
      <rect x={23} y={17.35} width={4.5} height={0.9} fill="var(--color-cream)" />
      <path
        d="M14.2 0.7 H47.3 V12.8 H38 V13 H22 V17.3 H14.2 Z"
        fill="none"
        stroke="var(--color-mute)"
        strokeWidth={0.08}
        strokeDasharray="0.45 0.28"
      />
    </g>
  );
}

function Windows() {
  return (
    <g stroke="var(--color-ink)" fill="var(--color-cream)">
      {/* north glass gable — great room */}
      <WindowNS x={15.2} w={7.4} />
      <WindowNS x={23.2} w={7.4} />
      <WindowNS x={31.2} w={7.4} />
      <WindowNS x={39.2} w={7.4} />
      {/* kitchen north */}
      <WindowNS x={2.2} w={5.2} />
      <WindowNS x={8} w={4.2} />
      {/* west primary + kitchen */}
      <WindowWE x={0} y={3.2} h={5.5} />
      <WindowWE x={0} y={20.5} h={6} />
      <WindowWE x={0} y={27.5} h={4.5} />
      {/* east mud + great room */}
      <WindowWE x={47.5} y={3.2} h={6} />
      <WindowWE x={47.5} y={20.5} h={5} />
      <WindowWE x={47.5} y={27} h={4.5} />
      {/* south primary + mud */}
      <WindowSN x={2.2} w={5} />
      <WindowSN x={8} w={4.2} />
      <WindowSN x={32.2} w={4} />
      <WindowSN x={42.5} w={4} />
    </g>
  );
}

function WindowNS({ x, w }: { x: number; w: number }) {
  return (
    <g>
      <rect x={x} y={-0.02} width={w} height={0.54} />
      <line x1={x} y1={0.14} x2={x + w} y2={0.14} strokeWidth={0.06} />
      <line x1={x} y1={0.34} x2={x + w} y2={0.34} strokeWidth={0.06} />
    </g>
  );
}

function WindowSN({ x, w }: { x: number; w: number }) {
  return (
    <g>
      <rect x={x} y={33.48} width={w} height={0.54} />
      <line x1={x} y1={33.64} x2={x + w} y2={33.64} strokeWidth={0.06} />
      <line x1={x} y1={33.84} x2={x + w} y2={33.84} strokeWidth={0.06} />
    </g>
  );
}

function WindowWE({ x, y, h }: { x: number; y: number; h: number }) {
  return (
    <g>
      <rect x={x - 0.02} y={y} width={0.54} height={h} />
      <line x1={x + 0.14} y1={y} x2={x + 0.14} y2={y + h} strokeWidth={0.06} />
      <line x1={x + 0.34} y1={y} x2={x + 0.34} y2={y + h} strokeWidth={0.06} />
    </g>
  );
}

function MainFurniture() {
  return (
    <g>
      <RoomName x={7} y={4.2}>
        Kitchen
      </RoomName>
      <RoomName x={32.5} y={3.6} sub="Two story · glass gable">
        Great room
      </RoomName>
      <RoomName x={7} y={20.2}>
        Primary suite
      </RoomName>
      <RoomName x={17.75} y={20.6} size="sm">
        Bath
      </RoomName>
      <RoomName x={17.75} y={28.8} size="sm">
        Closet
      </RoomName>
      <RoomName x={25.75} y={19.8} size="sm">
        Stair
      </RoomName>
      <RoomName x={38.75} y={20.4}>
        Mud
      </RoomName>

      <Furn x={1.2} y={1.2} w={11.6} h={2} />
      <Furn x={5.4} y={9.6} w={6} h={2.8} />

      <Furn x={17.2} y={11.8} w={6.4} h={3} />

      <Furn x={24.2} y={12.6} w={9.4} h={3} />
      <Furn x={27} y={9.8} w={3.6} h={2} />

      <Furn x={3.2} y={24.8} w={5.4} h={7} />
      <line
        x1={3.4}
        y1={24.8}
        x2={8.4}
        y2={24.8}
        stroke="var(--color-mute)"
        strokeWidth={0.1}
      />

      <Furn x={14.7} y={18.8} w={3.6} h={3.6} />
      <Furn x={18.8} y={19} w={1.5} h={2} />
      <Furn x={14.7} y={23.2} w={6.2} h={1.6} />

      <line
        x1={14.8}
        y1={27.6}
        x2={20.6}
        y2={27.6}
        stroke="var(--color-mute)"
        strokeWidth={0.08}
      />
      <line
        x1={14.8}
        y1={32}
        x2={20.6}
        y2={32}
        stroke="var(--color-mute)"
        strokeWidth={0.08}
      />

      <Furn x={31.4} y={18.8} w={15.4} h={1.6} />
      <Furn x={45.6} y={22.4} w={1.4} h={8} />
    </g>
  );
}

function UpperFurniture() {
  return (
    <g>
      <RoomName x={7} y={3.8}>
        Bedroom 2
      </RoomName>
      <RoomName x={31.5} y={5.6} sub="Open to great room below">
        Void
      </RoomName>
      <RoomName x={30} y={15.2} size="sm">
        Loft
      </RoomName>
      <RoomName x={7} y={20.2}>
        Bedroom 3
      </RoomName>
      <RoomName x={17.75} y={20.4} size="sm">
        Bath
      </RoomName>
      <RoomName x={25.75} y={19.8} size="sm">
        Stair
      </RoomName>
      <RoomName x={38.75} y={20.2}>
        Bedroom 4
      </RoomName>

      <Furn x={4} y={8.2} w={5.4} h={7} />
      <Furn x={1.4} y={14.8} w={3.2} h={2} />

      <line
        x1={22}
        y1={13}
        x2={38}
        y2={13}
        stroke="var(--color-ink)"
        strokeWidth={0.12}
      />
      <line
        x1={22}
        y1={13}
        x2={22}
        y2={17.5}
        stroke="var(--color-ink)"
        strokeWidth={0.12}
      />
      <line
        x1={38}
        y1={13}
        x2={38}
        y2={17.5}
        stroke="var(--color-ink)"
        strokeWidth={0.12}
      />
      <Furn x={25.2} y={14.2} w={8.4} h={2.2} />

      <Furn x={4} y={24.6} w={5.4} h={7} />

      <Furn x={14.7} y={22.4} w={3.6} h={3.6} />
      <Furn x={18.8} y={22.6} w={1.5} h={2} />
      <Furn x={14.7} y={30.4} w={6.2} h={1.6} />

      <Furn x={35.2} y={24.6} w={7} h={5.4} />
    </g>
  );
}

function Furn({
  x,
  y,
  w,
  h,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      fill="var(--color-paper-deep)"
      stroke="var(--color-mute)"
      strokeWidth={0.07}
    />
  );
}

function MainDoors() {
  return (
    <g fill="none" stroke="var(--color-mute)" strokeWidth={0.08}>
      {/* primary → bath (into bath) */}
      <path d="M 14 20.4 A 2.4 2.4 0 0 1 16.4 22.8" />
      <line x1={14} y1={20.4} x2={16.4} y2={20.4} strokeWidth={0.1} />
      {/* primary → closet */}
      <path d="M 14.4 26 A 2.2 2.2 0 0 0 16.6 28.2" />
      <line x1={14.4} y1={26} x2={14.4} y2={28.2} strokeWidth={0.1} />
      {/* primary → stair */}
      <path d="M 13.5 30.6 A 2.4 2.4 0 0 0 15.9 28.2" />
      <line x1={13.5} y1={30.6} x2={13.5} y2={28.2} strokeWidth={0.1} />
      {/* mud entry, double, swinging in */}
      <path d="M 36.2 33.5 A 2.6 2.6 0 0 1 38.8 30.9" />
      <line x1={36.2} y1={33.5} x2={36.2} y2={30.9} strokeWidth={0.1} />
      <path d="M 41.6 33.5 A 2.6 2.6 0 0 0 39 30.9" />
      <line x1={41.6} y1={33.5} x2={41.6} y2={30.9} strokeWidth={0.1} />
    </g>
  );
}

function UpperDoors() {
  return (
    <g fill="none" stroke="var(--color-mute)" strokeWidth={0.08}>
      <path d="M 13.5 9.2 A 2.4 2.4 0 0 1 15.9 11.6" />
      <line x1={13.5} y1={9.2} x2={13.5} y2={11.6} strokeWidth={0.1} />
      <path d="M 13.5 24.2 A 2.4 2.4 0 0 1 15.9 26.6" />
      <line x1={13.5} y1={24.2} x2={13.5} y2={26.6} strokeWidth={0.1} />
      <path d="M 21.5 24.2 A 2.4 2.4 0 0 0 19.1 26.6" />
      <line x1={21.5} y1={24.2} x2={21.5} y2={26.6} strokeWidth={0.1} />
      <path d="M 30 24.2 A 2.4 2.4 0 0 1 32.4 26.6" />
      <line x1={30} y1={24.2} x2={30} y2={26.6} strokeWidth={0.1} />
    </g>
  );
}

function Stairs({ up }: { up: boolean }) {
  const treads = Array.from({ length: 7 }, (_, i) => i);
  return (
    <g>
      {treads.map((i) => (
        <line
          key={i}
          x1={22.4}
          y1={19.2 + i * 0.95}
          x2={29.1}
          y2={19.2 + i * 0.95}
          stroke="var(--color-mute)"
          strokeWidth={0.07}
        />
      ))}
      {treads.map((i) => (
        <line
          key={`b${i}`}
          x1={22.4}
          y1={26.6 + i * 0.95}
          x2={29.1}
          y2={26.6 + i * 0.95}
          stroke="var(--color-mute)"
          strokeWidth={0.07}
        />
      ))}
      <polygon
        points={up ? "25.75,32.4 26.45,31.2 25.05,31.2" : "25.75,19.4 26.45,20.6 25.05,20.6"}
        fill="var(--color-ink)"
      />
      <text
        x={25.75}
        y={up ? 30.6 : 21.8}
        textAnchor="middle"
        fill="var(--color-ink)"
        fontSize={0.85}
        fontFamily="var(--font-sans)"
        letterSpacing={0.08}
      >
        {up ? "UP" : "DN"}
      </text>
    </g>
  );
}

function RoomName({
  x,
  y,
  children,
  sub,
  size = "md",
}: {
  x: number;
  y: number;
  children: string;
  sub?: string;
  size?: "md" | "sm";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill="var(--color-ink-soft)"
      fontSize={size === "sm" ? 0.95 : 1.15}
      fontFamily="var(--font-sans)"
      fontWeight={500}
      letterSpacing={0.14}
      style={{ textTransform: "uppercase" }}
    >
      {children}
      {sub ? (
        <tspan
          x={x}
          dy={1.35}
          fontSize={0.78}
          letterSpacing={0.04}
          fill="var(--color-mute)"
          fontWeight={400}
          style={{ textTransform: "none" }}
        >
          {sub}
        </tspan>
      ) : null}
    </text>
  );
}

function Dimensions() {
  const tick = 0.45;
  return (
    <g stroke="var(--color-ink)" fill="var(--color-ink)" strokeWidth={0.05}>
      <line x1={0} y1={-1.8} x2={48} y2={-1.8} />
      <line x1={0} y1={-1.8 - tick} x2={0} y2={-1.8 + tick} />
      <line x1={48} y1={-1.8 - tick} x2={48} y2={-1.8 + tick} />
      <text
        x={24}
        y={-2.35}
        textAnchor="middle"
        stroke="none"
        fontSize={1}
        fontFamily="var(--font-sans)"
        letterSpacing={0.08}
      >
        48'-0"
      </text>
      <line x1={-2.2} y1={0} x2={-2.2} y2={34} />
      <line x1={-2.2 - tick} y1={0} x2={-2.2 + tick} y2={0} />
      <line x1={-2.2 - tick} y1={34} x2={-2.2 + tick} y2={34} />
      <text
        x={-3.3}
        y={17.3}
        textAnchor="middle"
        stroke="none"
        fontSize={1}
        fontFamily="var(--font-sans)"
        letterSpacing={0.08}
        transform="rotate(-90 -3.3 17.3)"
      >
        34'-0"
      </text>
    </g>
  );
}

function TitleBlock({ floor }: { floor: Floor }) {
  return (
    <g fontFamily="var(--font-sans)" fill="var(--color-ink)">
      <text
        x={56}
        y={448}
        fontSize={11}
        fontWeight={500}
        letterSpacing={1.8}
        style={{ textTransform: "uppercase" }}
      >
        The Snowline Chalet
      </text>
      <text
        x={56}
        y={464}
        fontSize={11}
        fill="var(--color-mute)"
        letterSpacing={1.2}
        style={{ textTransform: "uppercase" }}
      >
        {floor === "main" ? "Main floor" : "Upper floor"} · 1/8" = 1'-0" · North
        to the range
      </text>
    </g>
  );
}

function Compass() {
  return (
    <g
      transform="translate(590 42)"
      fill="var(--color-ink)"
      fontFamily="var(--font-sans)"
    >
      <circle r={16} fill="none" stroke="var(--color-ink)" strokeWidth={1.1} />
      <polygon points="0,-11 3.2,6 -3.2,6" />
      <text
        y={-20}
        textAnchor="middle"
        fontSize={11}
        fontWeight={500}
        letterSpacing={1.4}
      >
        N
      </text>
    </g>
  );
}

function ScaleBar() {
  return (
    <g
      transform="translate(430 448)"
      fill="var(--color-ink)"
      fontFamily="var(--font-sans)"
    >
      <rect x={0} y={0} width={20} height={6} />
      <rect
        x={20}
        y={0}
        width={20}
        height={6}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth={1}
      />
      <rect x={40} y={0} width={20} height={6} />
      <rect
        x={60}
        y={0}
        width={20}
        height={6}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth={1}
      />
      <text y={18} fontSize={9} fill="var(--color-mute)">
        0
      </text>
      <text x={38} y={18} fontSize={9} fill="var(--color-mute)" textAnchor="middle">
        8
      </text>
      <text x={80} y={18} fontSize={9} fill="var(--color-mute)" textAnchor="end">
        16 ft
      </text>
    </g>
  );
}
