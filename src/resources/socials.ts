import { Github, Linkedin, Mail } from "lucide-react";

export const socialsSection = {
  links: [
    {
      name: "Github",
      url: "https://github.com/Felipe-martins1",
      icon: Github,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/felipemartins1/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: `mailto:${process.env.EMAIL}`,
      icon: Mail,
    },
  ],
  url: "https://www.felipemartins.dev.br",
} as const;
