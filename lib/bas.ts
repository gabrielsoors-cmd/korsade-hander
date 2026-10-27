// Lägger till sökvägsprefixet när sajten ligger på github.io-adressen (t.ex. /korsade-hander).
export const BAS = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function medBas(sokvag: string) {
  return `${BAS}${sokvag}`;
}
