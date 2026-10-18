export type Leader = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const leadershipTeam: readonly Leader[] = [
  {
    id: "meet-patel",
    name: "Meet Patel",
    role: "President",
    image: "/assets/PNGs/Meet Patel.png",
  },
  {
    id: "kunal-sharma",
    name: "Kunal Sharma",
    role: "Vice President",
    image: "/assets/PNGs/Kunal Sharma.png",
  },
  {
    id: "hitesh-nagar",
    name: "Hitesh Nagar",
    role: "Secretary Treasurer",
    image: "/assets/PNGs/Hitesh Nagar copy.png",
  },
];
