export type SocialLink = { label: "Telegram" | "Linkedin" | "Email"; href: string };

export type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoBg?: string;
};

export const profile = {
  name: "Ульяна Прощенко",
  role: "Middle+ Product Designer",
  bioLines: [
    "Middle+ продуктовый дизайнер с 4+ годами опыта",
    "Делаю интерфейсы для людей и про людей",
    "Живу в Санкт-Петербурге",
  ],
  avatar: "/assets/home/avatar.png",
  resumeUrl: "/resume.pdf",
  contactUrl: "https://t.me/yulianiaa",
  socialLinks: [
    { label: "Telegram", href: "https://t.me/yulianiaa" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/yuliania/" },
    { label: "Email", href: "mailto:yuliania.a@yandex.ru" },
  ] satisfies SocialLink[],
  experience: [
    {
      company: "Мигрант Сервис",
      position: "Продуктовый дизайнер",
      period: "декабрь 2024 – июнь 2026",
      logo: "/assets/logos/migrant-service.svg",
      logoWidth: 34,
      logoHeight: 13,
      logoBg: "#00a749",
    },
    {
      company: "Фонтера",
      position: "UX/UI дизайнер",
      period: "октябрь 2023 – декабрь 2024",
      logo: "/assets/logos/fontera.svg",
      logoWidth: 29,
      logoHeight: 29,
      logoBg: "var(--color-neutral-50)",
    },
    {
      company: "Krew Guru",
      position: "UX/UI дизайнер",
      period: "декабрь 2021 – апрель 2024",
      logo: "/assets/logos/krewguru.svg",
      logoWidth: 22,
      logoHeight: 34,
      logoBg: "#ffebe6",
    },
  ] satisfies ExperienceItem[],
};
