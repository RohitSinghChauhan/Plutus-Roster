export type Leader = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const leadershipTeam: readonly Leader[] = [
  {
    id: "ritesh-motwani",
    name: "Ritesh Motwani",
    role: "President",
    image: "/assets/PNGs/Ritesh MOtvani.png",
  },
  {
    id: "kaushal-joshi",
    name: "KAUSHAL JOSHI",
    role: "Vice President",
    image: "/assets/PNGs/Kaushal Joshi.png",
  },
  {
    id: "aniruddhsinh-shekhawat",
    name: "ANIRUDDHSINH SHEKHAWAT",
    role: "Secretary Treasurer",
    image: "/assets/PNGs/Anirudhh sekhavat.png",
  },
];
