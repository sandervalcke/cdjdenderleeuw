import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sandervalcke.github.io/cdjdenderleeuw/",
  author: "Sander Valcke",
  profile: "",
  desc: "Website of CoderDojo Denderleeuw",
  title: "CoderDojo Denderleeuw",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://sandervalcke.github.io/cdjdenderleeuw/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sandervalcke/cdjdenderleeuw",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:denderleeuw@coderdojobelgium.be",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "X",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on X`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://sandervalcke.github.io/cdjdenderleeuw",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
