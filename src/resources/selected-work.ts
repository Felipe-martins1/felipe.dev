type Work = {
  title: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
};

type SelectedWorkSection = {
  title: string;
  description: string;
  items: Work[];
};

export const selectedWorkSection: SelectedWorkSection = {
  title: "Selected Work",
  description: "A few projects I'm proud of.",
  items: [],
} as const;
