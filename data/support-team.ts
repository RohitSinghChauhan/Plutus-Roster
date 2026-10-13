export type SupportMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  message: readonly string[];
};

export const supportTeam: readonly SupportMember[] = [
  {
    id: "oorvaksh-medora",
    name: "Oorvaksh Medora",
    role: "Sr. Support Director",
    photo: "/assets/hercules/support-placeholder-image.jpg",
    message: [
      "Dear BNI,",
      "A chapter grows when its members feel supported before they ever need to ask. I am here to keep that path clear, so each of you can focus on showing up and giving.",
      "If a process, a meeting, or a next step is unclear, reach out. Support works best when it is early, practical, and personal.",
      "My best wishes to you all.",
    ],
  },
  {
    id: "sagar-vora",
    name: "Sagar Vora",
    role: "Support Director",
    photo: "/assets/hercules/support-placeholder-image.jpg",
    message: [
      "Dear BNI,",
      "I am glad to stand with this chapter as Support Director. The work is simple to name and serious to do: help members follow through, and look for the next person you can help.",
      "The relationships you build here are the real return. I am available whenever the team needs direction.",
      "My best wishes to you all.",
    ],
  },
  {
    id: "abhishek-shah",
    name: "Abhishek Shah",
    role: "Support Ambassador",
    photo: "/assets/hercules/support-placeholder-image.jpg",
    message: [
      "Dear BNI,",
      "BNI is journey where you might be part of certain processes. These processes will lead you to the new doors in your personal and professional life. These new doors will come up with new opportunities in your respective industries.",
      "I encourage each of you to reach out and engage with fellow members. Together, we can further strengthen our network and achieve even greater success. The collaboration, referrals, and camaraderie you share truly exemplify the spirit of BNI.",
      "BNI provides a powerful platform for networking with like-minded professionals across various industries. Take advantage of our meetings to build meaningful relationships and expand your business connections.",
      "My best wishes to you all.",
    ],
  },
];
