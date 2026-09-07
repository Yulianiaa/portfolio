export type SocialLink = { label: "Telegram" | "Email" | "CV"; href: string; newTab?: boolean };

export type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  logo: string;
  logoBg?: string;
};

export const profile = {
  name: "Ульяна Прощенко",
  role: "Middle+ продуктовый дизайнер",
  bioLines: [
    "Middle+ продуктовый дизайнер с 4+ годами опыта",
    "Живу в Санкт-Петербурге",
  ],
  avatar: "/assets/home/avatar.png",
  contactUrl: "https://t.me/yulianiaa",
  socialLinks: [
    { label: "Telegram", href: "https://t.me/yulianiaa" },
    { label: "Email", href: "mailto:yuliania.a@yandex.ru" },
    { label: "CV", href: "/resume.pdf", newTab: true },
  ] satisfies SocialLink[],
  experience: [
    {
      company: "Мигрант Сервис",
      position: "Продуктовый дизайнер",
      period: "декабрь 2024 – июнь 2026",
      logo: "/assets/logos/migrant-service.svg",
      logoBg: "#00a749",
    },
    {
      company: "Фонтера",
      position: "Продуктовый дизайнер",
      period: "октябрь 2023 – декабрь 2024",
      logo: "/assets/logos/fontera.svg",
      logoBg: "var(--color-neutral-50)",
    },
    {
      company: "Krew Guru",
      position: "Продуктовый дизайнер",
      period: "декабрь 2021 – апрель 2024",
      logo: "/assets/logos/krewguru.svg",
      logoBg: "#ffebe6",
    },
  ] satisfies ExperienceItem[],
};
