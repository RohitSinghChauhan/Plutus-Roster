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
    image: "/assets/hercules/support-placeholder-image.jpg",
  },
  {
    id: "kunal-sharma",
    name: "Kunal Sharma",
    role: "Vice President",
    image: "/assets/hercules/support-placeholder-image.jpg",
  },
  {
    id: "hitesh-nagar",
    name: "Hitesh Nagar",
    role: "Secretary Treasurer",
    image: "/assets/hercules/support-placeholder-image.jpg",
  },
];
