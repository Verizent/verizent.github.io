import Photo from "../Assets/Photo.jpg";
import INAkademia from "../Assets/INAkademia.jpg";
import BPK_Penabur from "../Assets/BPK_Penabur.jpg";
import CUHK from "../Assets/CUHK.png";
import HKSTP from "../Assets/HKSTP.png";
import PPIHK from "../Assets/PPIHK.png";

export const portfolioData = {
  name: "Michael Richard Suryajaya",
  initials: "MR",
  description: "Computer Science at CUHK. AI & Data Intern at HKSTP.",
  about_intro:
    "I’m a Computer Science student at The Chinese University of Hong Kong, specialising in Algorithms & Complexity. Originally from Indonesia, I’m now exploring AI infrastructure as an Ecosystem Development — AI & Data Intern at HKSTP.",
  about_detail:
    "I build across the stack: from an education platform serving 250+ users and a campus marketplace to containerised LLM services on HPC infrastructure. I’m interested in how software works in practice, and how it can help people. Outside of code, that curiosity extends to education, community, and music.",
  avatarUrl: Photo,
  languages:
    "Bahasa Indonesia (Native) · English (Fluent) · Mandarin (Intermediate)",
  highlights: [
    { value: "250", suffix: "+", label: "Users on the INAkademia platform" },
    { value: "1", suffix: "st", label: "PwC Hack A Day 2024" },
    { value: "3.82", suffix: "/4.00", label: "Cumulative GPA at CUHK" },
  ],
  contact: {
    email: "michael.richard.suryajayaa@gmail.com",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/Verizent" },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/michael-richard-suryajaya",
      },
    },
  },
  work: [
    {
      id: 0,
      company: "Hong Kong Science and Technology Parks Corporation (HKSTP)",
      href: "https://www.hkstp.org",
      location: "Hong Kong SAR",
      title: "Ecosystem Development — AI & Data Intern",
      logoUrl: HKSTP,
      start: "Jun 2026",
      end: "Present",
      description: [
        "Authoring an end-to-end LLM deployment cookbook to onboard tenants onto the on-premise HPC platform, covering containerised services, inter-service integration, and inference endpoints.",
        "Developing a document generation system on a dedicated NVIDIA DGX Spark to turn long, unstructured prompts into structured papers, evaluating prompting and retrieval-augmented generation (RAG).",
        "Deployed a containerised data re-identification risk assessment pipeline, integrating sdcMicro with Ollama-served LLMs for AI-assisted anonymisation.",
        "Evaluated Microsoft Presidio for detecting personally identifiable information in unstructured text and images, including its integration with the HPC platform.",
        "Evaluated third-party AI agent platforms against internal requirements and presented findings and recommendations to team leadership.",
      ],
    },
    {
      id: 1,
      company: "INAkademia",
      location: "Remote",
      title: "Full Stack Web Developer",
      logoUrl: INAkademia,
      start: "Apr 2025",
      end: "Aug 2025",
      description: [
        "Architected and built the educational non-profit’s first full-stack platform using MongoDB, Express.js, React, and Node.js, with Mongoose schemas and bcrypt-based authentication.",
        "Grew the platform’s user base to 250+ and supported 115% year-over-year programme sign-up growth.",
        "Affiliated with the organisation from September 2023 to January 2026; led active platform development from April to August 2025.",
      ],
    },
  ],
  activities: [
    {
      id: 0,
      company: "INAkademia",
      location: "Remote",
      title: "Head of Summer Bridge Programme",
      logoUrl: INAkademia,
      start: "Mar 2025",
      end: "Jul 2025",
      description: [
        "Led a one-month online programme delivering six subject classes to 200+ participants.",
        "Achieved 115% year-over-year enrolment growth through curriculum design and cross-functional coordination.",
      ],
    },
    {
      id: 1,
      company: "PPI Hong Kong",
      href: "https://www.ppihongkong.org",
      location: "Hong Kong",
      title: "Co-Director, Media & Marketing",
      logoUrl: PPIHK,
      start: "Sep 2025",
      end: "Jun 2026",
      description: [
        "Co-directed the media team for a 1,000+ member Indonesian student organisation across Hong Kong.",
      ],
    },
  ],
  education: [
    {
      id: 0,
      school: "The Chinese University of Hong Kong",
      href: "https://cuhk.edu.hk",
      degree: "BSc Computer Science · Algorithms & Complexity",
      logoUrl: CUHK,
      start: "Aug 2024",
      end: "Jul 2028 (Expected)",
      description: [
        "Cumulative GPA: 3.82/4.00 · Dean’s List 2024/25 · CSE Silver Award for Outstanding Academic Performance 2025/26.",
        "Scholarships: University Admissions Scholarship (2024–2028), Honours at Entrance (2024), and Liao Yuan Tung Memorial Scholarship (2025/26).",
        "Coursework: Data Structures & Algorithms, Software Engineering, Computer Organization & Design, Digital Logic & Systems, Discrete Mathematics, Probability, Statistics, and Linear Algebra.",
      ],
    },
    {
      id: 1,
      school: "SMAK 1 Penabur Jakarta",
      href: "https://smakone.org",
      degree: "Mathematics and Natural Sciences",
      logoUrl: BPK_Penabur,
      start: "Jul 2021",
      end: "May 2024",
    },
  ],
  projects: [
    {
      title: "CUrousell",
      dates: "Mar – Apr 2026",
      category: "Campus marketplace",
      symbol: "cu.",
      visual: "marketplace",
      description:
        "Built and deployed a second-hand marketplace for CUHK students and staff. Integrated Stripe payments, email one-time passwords via SMTP for verification, and Google Maps for listing locations. An RSpec and Cucumber test suite covers core marketplace flows with 87% line coverage.",
      technologies: [
        "Ruby on Rails",
        "PostgreSQL",
        "Heroku",
        "Stripe",
        "RSpec",
        "Cucumber",
      ],
      links: [],
    },
    {
      title: "Online Exam Invigilator System",
      dates: "Oct – Nov 2024",
      category: "Hackathon winner",
      symbol: "⌘",
      visual: "invigilator",
      description:
        "Won 1st place at PwC Hack A Day 2024, representing CUHK among competing Hong Kong and Macau universities. Built the full React frontend for live exam monitoring, integrating Java backend APIs for facial analysis powered by AWS Rekognition.",
      technologies: ["React", "Java", "Docker", "AWS"],
      links: [],
    },
    {
      title: "INAkademia Platform",
      dates: "Apr – Aug 2025",
      category: "Built for learning",
      symbol: "ia.",
      visual: "education",
      description:
        "Built an educational non-profit’s first full-stack platform, serving 250+ users and supporting 115% year-over-year programme sign-up growth. Developed the React frontend, backend APIs, Mongoose data schemas, and bcrypt-based authentication.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      links: [],
    },
    {
      title: "Algorithmic Trading Competition",
      dates: "Mar 2026",
      category: "Quantitative exploration",
      symbol: "↗",
      visual: "trading",
      description:
        "Competed as part of a team in a real-time crypto trading simulation on Roostoo. Developed and backtested strategies using historical price data and Python on AWS.",
      technologies: ["Python", "AWS"],
      links: [],
    },
    {
      title: "HKD to IDR Discord Bot",
      dates: "Jul 2025",
      category: "A little everyday utility",
      symbol: "↔",
      visual: "currency",
      description:
        "Built a Discord bot to track HKD-to-IDR exchange rate fluctuations. It connects to a currency exchange API and reports rates through custom commands.",
      technologies: ["Python", "Discord.py"],
      links: [{ type: "Source", href: "https://github.com/Verizent/IDinHK" }],
    },
  ],
  awards: [
    {
      title: "1st Place — PwC Hack A Day 2024",
      issuer: "PwC · CUHK representative, Hong Kong & Macau universities",
      year: "2024",
    },
    {
      title: "CSE Silver Award for Outstanding Academic Performance",
      issuer: "The Chinese University of Hong Kong",
      year: "2025/26",
    },
    {
      title: "Liao Yuan Tung Memorial Scholarship",
      issuer: "The Chinese University of Hong Kong",
      year: "2025/26",
    },
    {
      title: "Dean’s List 2024/25",
      issuer: "The Chinese University of Hong Kong",
      year: "2025",
    },
    {
      title: "University Admissions Scholarship",
      issuer: "The Chinese University of Hong Kong",
      year: "2024–2028",
    },
    {
      title: "Honours at Entrance",
      issuer: "The Chinese University of Hong Kong",
      year: "2024",
    },
  ],

  music: {
    worship: [
      {
        title: "Heart of Worship",
        artist: "Phil Wickham, Matt Redman",
        spotifyUrl:
          "https://open.spotify.com/track/7BRUdA2d4eer6Y1VtKviec?si=4c4cff1726074695",
      },
      {
        title: "The Blessing",
        artist: "Elevation Worship, Kari Jobe, Cody Carnes",
        spotifyUrl:
          "https://open.spotify.com/track/5O306r2a9Nl7rm5ZlaTqka?si=e44784f1a881456f",
      },
      {
        title: "Worthy is the Lamb",
        artist: "Hillsong Worship",
        spotifyUrl:
          "https://open.spotify.com/track/4vQW0xTLnsTYT1jLT2cH5P?si=2e623ea0fc7a4ec5",
      },
      {
        title: "See a Victory",
        artist: "Elevation Worship",
        spotifyUrl:
          "https://open.spotify.com/track/3gtqd9P8kZblHf4I7Ybub2?si=2f4c7020764945a3",
      },
      {
        title: "Here I Bow",
        artist: "Michael W. Smith",
        spotifyUrl:
          "https://open.spotify.com/track/1GXDj3xZdZz6wjpE7Dz8U5?si=981396bab621487e",
      },
      {
        title: "Great Are You Lord",
        artist: "All Sons & Daughters, David Leonard",
        spotifyUrl:
          "https://open.spotify.com/track/2BuCf7ulsl6BSLcb1BBT4H?si=2d892c354ace4a43",
      },
    ],
    pop: [
      {
        title: "There's Nothing Holding me Back",
        artist: "Shawn Mendes",
        spotifyUrl:
          "https://open.spotify.com/track/7JJmb5XwzOO8jgpou264Ml?si=30cec22d6e5a4adb",
      },
      {
        title: "像晴天像雨天",
        artist: "Silence Wang",
        spotifyUrl:
          "https://open.spotify.com/track/298LjjcBvuQCAlwUWb9dKb?si=bf839921b44f4b45",
      },
      {
        title: "High Hopes",
        artist: "Panic! At The Disco",
        spotifyUrl:
          "https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom?si=36df22bc6fc74c23",
      },
      {
        title: "This Is Me",
        artist: "Keala Settle, The Greatest Showman",
        spotifyUrl:
          "https://open.spotify.com/track/45aBsnKRWUzhwbcqOJLwfe?si=ba1ee18fb5b44f24",
      },
      {
        title: "Kejar Mimpi",
        artist: "Maudy Ayunda",
        spotifyUrl:
          "https://open.spotify.com/track/1ACIq7dH1SX4yXhyPoAVKu?si=60d76153b7e145e6",
      },
      {
        title: "Stay With Me",
        artist: "Sam Smith",
        spotifyUrl:
          "https://open.spotify.com/track/0bvcF8AXDBqyz4TqudAfWh?si=7a9f354251cc41bb",
      },
    ],
    jazz: [
      {
        title: "Fly Me to the Moon",
        artist: "Frank Sinatra, Count Basie",
        spotifyUrl:
          "https://open.spotify.com/track/7FXj7Qg3YorUxdrzvrcY25?si=d24345b6701c48d0",
      },
      {
        title: "Feeling Good",
        artist: "Anthony Newley, Leslie Bricusse; covered by Michael Bublé",
        spotifyUrl:
          "https://open.spotify.com/track/1AM8QdDFZMq6SrrqUnuQ9P?si=ac575a03f9044d13",
      },
    ],
  },
};
