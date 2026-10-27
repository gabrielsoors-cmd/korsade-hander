// Grunduppgifter för Korsade Händer. Ändra här så uppdateras hela sajten.

export const site = {
  name: "Korsade Händer",
  url: "https://korsadehander.se",
  email: "jorgenbjorklund77@outlook.com",
  // Telefonnummer saknas än. Fyll i, t.ex. "070-123 45 67", så visas det i kontaktrutorna och sidfoten.
  phone: "" as string,
  swish: "1231337252",
  swishDisplay: "123 133 72 52",
  bankgiro: "5361-4764",
  testkryss: {
    title: "Plus i kryss nr 1",
    url: "https://crossword.info/Korsadehander/Plus_i_kryss_nr_1",
  },
} as const;

export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
