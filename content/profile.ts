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
    "Продуктовый дизайнер с 4+ годами опыта",
    "Превращаю сложные сценарии в понятный цифровой опыт",
    "Живу в Санкт-Петербурге",
  ],
  avatar: "/assets/home/avatar-circle-v2.png",
  contactUrl: "https://t.me/yulianiaa",
  resumeUrl: "/resume.pdf",
  socialLinks: [
    { label: "Telegram", href: "https://t.me/yulianiaa" },
    { label: "Email", href: "mailto:yuliania.a@yandex.ru" },
    { label: "CV", href: "/resume.pdf", newTab: true },
  ] satisfies SocialLink[],
  about: {
    photos: [
      { src: "/assets/home/about-photo-1.jpg", alt: "", crop: "portrait", width: 1706, height: 2560, monochrome: true },
      { src: "/assets/home/about-photo-2.jpg", alt: "", crop: "poster", width: 960, height: 1280, monochrome: false },
      { src: "/assets/home/about-photo-3.jpg", alt: "", crop: "cover", width: 3765, height: 3455, monochrome: true },
      { src: "/assets/home/about-photo-4.jpg", alt: "", crop: "cover", width: 1280, height: 909, monochrome: true },
    ],
    paragraphs: [
      "Дизайн и технологии со мной с детства. После школы я ходила в студию дизайна, а дома папа учил меня верстать сайты на HTML и CSS. До сих пор люблю воплощать креативные идеи и находить взаимосвязи внутри сложных систем",
      "Моё главное качество — смелость, я легко беру на себя ответственность и пробую новое. Быстро нахожу общий язык с окружающими, готова подставить плечо в трудный момент и искренне радоваться чужим успехам",
      "Мечтаю завести собаку, попасть на Гран-при F1 и получить спортивный разряд по плаванию",
    ],
    experience: [
      {
        company: "Мигрант Сервис",
        href: "https://mmc.help/migrant",
        position: "Продуктовый дизайнер",
        description: "Развивала подписку и booking, платформу маркетинговых коммуникаций и дизайн-систему",
      },
      {
        company: "Фонтера",
        href: "https://fontera.tech/",
        position: "Продуктовый дизайнер",
        description: "Создала WEB-интерфейс и дизайн-систему для промышленного программного обеспечения",
      },
      {
        company: "Krew Guru",
        href: "https://krew.guru/ru",
        position: "Продуктовый дизайнер",
        description: "Проектировала HRM-систему и мобильное приложение в сфере морского рекрутинга",
      },
    ],
    education: [
      { name: "Sharped skills", detail: "Архитектор дизайн-систем, 2025" },
      { name: "Formfactor", detail: "Продуктовый дизайн, 2024" },
      { name: "SOVA School", detail: "UX-дизайн, 2021" },
      {
        name: "Санкт-Петербургский университет технологий управления и экономики",
        detail: "Реклама и связи с общественностью (бакалавриат), 2020–2024",
      },
    ],
  },
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
