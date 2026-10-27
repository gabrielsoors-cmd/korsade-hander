// Företagsnamnet som ett litet korsord: KORSADE vågrätt och HÄNDER lodrätt, korsade i D.
// Ingångarna på startsidan har data-ord="korsade" / "hander", och när någon hovrar
// en ingång markeras motsvarande ord i krysset (se globals.css).

type Cell = {
  r: number;
  c: number;
  ch: string;
  nr?: number;
  korsade?: boolean;
  hander?: boolean;
  i: number;
};

const ACROSS = "KORSADE";
const DOWN = "HÄNDER";
const ROW = 3; // raden där KORSADE ligger
const COL = 5; // kolumnen där HÄNDER ligger (D i KORSADE)

function buildCells(): Cell[] {
  const cells: Cell[] = [...ACROSS].map((ch, c) => ({ r: ROW, c, ch, korsade: true, i: c }));
  let order = ACROSS.length;
  [...DOWN].forEach((ch, r) => {
    const shared = cells.find((x) => x.r === r && x.c === COL);
    if (shared) {
      shared.hander = true;
      return;
    }
    cells.push({ r, c: COL, ch, hander: true, i: order++ });
  });
  cells.find((x) => x.r === 0 && x.c === COL)!.nr = 1;
  cells.find((x) => x.r === ROW && x.c === 0)!.nr = 2;
  return cells;
}

const CELLS = buildCells();

type Props = {
  className?: string;
  /** Innehåll i krysset tomma övre vänstra hörn, t.ex. loggan. */
  corner?: React.ReactNode;
};

export function CrosswordName({ className = "", corner }: Props) {
  return (
    <div
      className={`rutnat grid w-fit [--cell:min(12vw,3.5rem)] sm:[--cell:3.75rem] lg:[--cell:4.5rem] ${className}`}
      style={{
        gridTemplateColumns: `repeat(${ACROSS.length}, var(--cell))`,
        gridTemplateRows: `repeat(${DOWN.length}, var(--cell))`,
      }}
    >
      {corner ? (
        <div className="flex items-start justify-start pb-[calc(var(--cell)*0.2)] pr-[calc(var(--cell)*0.3)]" style={{ gridRow: `1 / ${ROW + 1}`, gridColumn: `1 / ${COL + 1}` }}>
          {corner}
        </div>
      ) : null}
      {CELLS.map((cell) => (
        <div
          aria-hidden="true"
          key={`${cell.r}-${cell.c}`}
          data-korsade={cell.korsade ? "" : undefined}
          data-hander={cell.hander ? "" : undefined}
          className="korsruta-cell ruta relative flex items-center justify-center bg-paper"
          style={{ gridRow: cell.r + 1, gridColumn: cell.c + 1 }}
        >
          {cell.nr ? (
            <span className="absolute left-[0.3em] top-[0.15em] font-rubrik text-[length:calc(var(--cell)*0.22)] leading-none text-ink">
              {cell.nr}
            </span>
          ) : null}
          <span
            className="animate-skriv font-rubrik text-[length:calc(var(--cell)*0.56)] font-bold leading-none text-ink"
            style={{ animationDelay: `${250 + cell.i * 85}ms` }}
          >
            {cell.ch}
          </span>
        </div>
      ))}
    </div>
  );
}
