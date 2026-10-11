export type LetterBlock = {
  text: string;
  emphasis?: boolean;
};

export type AreaDirector = {
  name: string;
  role: string;
  photo: string;
  blocks: readonly LetterBlock[];
};

export const areaDirector: AreaDirector = {
  name: "Snehal Patel",
  role: "Area Director",
  photo: "/assets/hercules/snehal.jpg",
  blocks: [
    { text: "Dear BNI," },
    {
      text: "A positive mind set brings positive things. I believe in spreading an infectious vibe of Motivation, Innovation, Determination, Dedication & Discipline!",
    },
    {
      text: "Success is not just about what you accomplish in your life; it’s about how you inspire others to do, so always believe in helping others and working on Giver’s Gain Philosophy.",
    },
    {
      text: "It’s simple – Make everyday, a little less ordinary and see extraordinary things unfold right in front of your eyes!",
    },
    { text: "DON’T STOP UNTIL YOU ARE PROUD!", emphasis: true },
  ],
};
