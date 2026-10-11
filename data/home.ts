export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "youtube"
  | "website";

export type MemberSocial = {
  platform: SocialPlatform;
  href: string;
};

export type Member = {
  id: string;
  name: string;
  category: string;
  company: string;
  phone: string;
  email: string;
  photo: string;
  logo: string;
  socials: MemberSocial[];
};

type MemberSource = {
  name: string;
  category: string;
  company: string;
  photo: string;
  logo: string;
  socials: readonly SocialPlatform[];
};

const NON_SLUG = /[^a-z0-9]+/g;
const EDGE_DASH = /^-+|-+$/g;

function toId(name: string) {
  return name.toLowerCase().replace(NON_SLUG, "-").replace(EDGE_DASH, "");
}

// Portraits from public/assets/PNGs paired with firm logos from public/assets/logos
// when the file names match, including close spellings.
const roster: readonly MemberSource[] = [
  {
    name: "Aniruddh Sekhavat",
    category: "Interior Designer - Residential",
    company: "Lineform Studio",
    photo: "/assets/PNGs/Anirudhh sekhavat.png",
    logo: "/assets/logos/aniruddh.png",
    socials: ["instagram", "facebook", "website"],
  },
  {
    name: "Avidhesh Rathod",
    category: "Architect - Commercial",
    company: "Form & Field Architects",
    photo: "/assets/PNGs/Avidhesh Rathod.png",
    logo: "/assets/logos/avidesh.png",
    socials: ["instagram", "linkedin", "website"],
  },
  {
    name: "Bhavesh Patel",
    category: "Chartered Accountant",
    company: "Patel Ledger & Co.",
    photo: "/assets/PNGs/BHavesh Patel copy.png",
    logo: "/assets/logos/Bhavesh Patel Logo.jpeg",
    socials: ["linkedin", "website"],
  },
  {
    name: "Bhavesh Raval",
    category: "Corporate Lawyer",
    company: "Raval Legal Chambers",
    photo: "/assets/PNGs/BHaves raval.png",
    logo: "/assets/logos/BHavesh Raval logo.jpeg",
    socials: ["linkedin", "website"],
  },
  {
    name: "Bhumika Shah",
    category: "Health Coach",
    company: "Wellness Circle",
    photo: "/assets/PNGs/BHumika Shah.png",
    logo: "/assets/logos/bhumi.png",
    socials: ["instagram", "facebook", "youtube"],
  },
  {
    name: "Chirag",
    category: "Digital Marketing",
    company: "Northstar Media",
    photo: "/assets/PNGs/Chirag.png",
    logo: "/assets/logos/chirag.png",
    socials: ["instagram", "linkedin", "website"],
  },
  {
    name: "Deniah Shah",
    category: "Event Planner",
    company: "Gather & Co.",
    photo: "/assets/PNGs/Deniah Shah.png",
    logo: "/assets/logos/denish.png",
    socials: ["instagram", "facebook"],
  },
  {
    name: "Dr. Ankita",
    category: "Dentist",
    company: "Smile Clinic",
    photo: "/assets/PNGs/Dr Ankita.png",
    logo: "/assets/logos/ankita.png",
    socials: ["instagram", "facebook", "website"],
  },
  {
    name: "Hitesh Nagar",
    category: "Real Estate Advisor",
    company: "Nagar Estates",
    photo: "/assets/PNGs/Hitesh Nagar copy.png",
    logo: "/assets/logos/Hitesh.png",
    socials: ["facebook", "website"],
  },
  {
    name: "Jay Reliya",
    category: "Insurance Advisor",
    company: "Shieldline Insurance",
    photo: "/assets/PNGs/Jay Reliya.png",
    logo: "/assets/logos/jay r.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Jayprakash Vasdevani",
    category: "Financial Consultant",
    company: "Vasdevani Wealth",
    photo: "/assets/PNGs/Jayprakash Vasdevani copy.png",
    logo: "/assets/logos/jay v.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Kaushal Joshi",
    category: "IT Services",
    company: "Joshi Systems",
    photo: "/assets/PNGs/Kaushal Joshi.png",
    logo: "/assets/logos/kaushal.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Kunal Sharma",
    category: "Photographer",
    company: "Frame Theory",
    photo: "/assets/PNGs/Kunal Sharma.png",
    logo: "/assets/logos/kunal.png",
    socials: ["instagram", "facebook", "website"],
  },
  {
    name: "Maulin Pandya",
    category: "Civil Contractor",
    company: "Pandya Build",
    photo: "/assets/PNGs/Maulin Pandya.png",
    logo: "/assets/logos/maulin.png",
    socials: ["facebook", "website"],
  },
  {
    name: "Meet Patel",
    category: "Graphic Designer",
    company: "Meet Creative",
    photo: "/assets/PNGs/Meet Patel.png",
    logo: "/assets/logos/meet.png",
    socials: ["instagram", "website"],
  },
  {
    name: "Megha",
    category: "Travel Consultant",
    company: "Open Route Travels",
    photo: "/assets/PNGs/Megha copy.png",
    logo: "/assets/logos/megha.png",
    socials: ["instagram", "facebook"],
  },
  {
    name: "Narendrasing Rajput",
    category: "Automobile Dealer",
    company: "Rajput Motors",
    photo: "/assets/PNGs/Narendrasing Rajput.png",
    logo: "/assets/logos/narendra.png",
    socials: ["facebook", "website"],
  },
  {
    name: "Nidhi Varma",
    category: "Education Consultant",
    company: "Varma Learning",
    photo: "/assets/PNGs/Nidhi Varma.png",
    logo: "/assets/logos/nidhi.png",
    socials: ["instagram", "linkedin"],
  },
  {
    name: "Niket",
    category: "Printing & Packaging",
    company: "Pressline",
    photo: "/assets/PNGs/Nikte copy.png",
    logo: "/assets/logos/niket.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Nirav Bansal",
    category: "Tax Consultant",
    company: "Bansal Tax Desk",
    photo: "/assets/PNGs/Nirav Bansal.png",
    logo: "/assets/logos/Nirav bansal.jpeg",
    socials: ["linkedin", "website"],
  },
  {
    name: "Nitin Patel",
    category: "Manufacturing",
    company: "Patel Forge",
    photo: "/assets/PNGs/Nitin Patel.png",
    logo: "/assets/logos/nitin.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Pooja Jain",
    category: "Jewellery Designer",
    company: "Jain Atelier",
    photo: "/assets/PNGs/Pooja Jain.png",
    logo: "/assets/logos/pooja.png",
    socials: ["instagram", "facebook", "website"],
  },
  {
    name: "Priyank Bothra",
    category: "Logistics",
    company: "Bothra Freight",
    photo: "/assets/PNGs/Priyank Bothra.png",
    logo: "/assets/logos/priyank.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Raj",
    category: "Business Coach",
    company: "Next Seat Coaching",
    photo: "/assets/PNGs/Raj.png",
    logo: "/assets/logos/raj.png",
    socials: ["instagram", "youtube", "linkedin"],
  },
  {
    name: "Ritesh Motvani",
    category: "Solar Energy",
    company: "Motvani Solar",
    photo: "/assets/PNGs/Ritesh MOtvani.png",
    logo: "/assets/logos/Ritesh.jpeg",
    socials: ["facebook", "website"],
  },
  {
    name: "Rohan",
    category: "Furniture",
    company: "Rohan Living",
    photo: "/assets/PNGs/Rohan.png",
    logo: "/assets/logos/rohan.png",
    socials: ["instagram", "website"],
  },
  {
    name: "Rushabh Sanghvi",
    category: "Security Systems",
    company: "Sanghvi Secure",
    photo: "/assets/PNGs/Rushabh sanghvi.png",
    logo: "/assets/logos/Rushabh.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Rutvij Desai",
    category: "HR Consultant",
    company: "Desai People Co.",
    photo: "/assets/PNGs/Rutvij DEsai.png",
    logo: "/assets/logos/rutvij.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Suresh Purohit",
    category: "Electrical Contractor",
    company: "Purohit Power",
    photo: "/assets/PNGs/SUresh Purohit.png",
    logo: "/assets/logos/SUreshbhai.PNG",
    socials: ["facebook", "website"],
  },
  {
    name: "Umang Patel",
    category: "Water Solutions",
    company: "Patel Hydro",
    photo: "/assets/PNGs/Umang Patel.png",
    logo: "/assets/logos/umang.png",
    socials: ["linkedin", "website"],
  },
  {
    name: "Vinay Bhatt",
    category: "Banker",
    company: "Branchline Finance",
    photo: "/assets/PNGs/Vinay Bhatt.png",
    logo: "/assets/logos/Vinaybhai.jpeg",
    socials: ["linkedin", "website"],
  },
];

export const members: Member[] = roster.map((person, index) => {
  const id = toId(person.name);
  const local = String(10001 + index);

  return {
    id,
    name: person.name,
    category: person.category,
    company: person.company,
    phone: `+91 90000 ${local}`,
    email: `${id}@example.com`,
    photo: person.photo,
    logo: person.logo,
    socials: person.socials.map((platform) => ({
      platform,
      href: `https://example.com/${platform}/${id}`,
    })),
  };
});
