import Photo from '../Assets/Photo.jpg';
import INAkademia from '../Assets/INAkademia.jpg';
import BPK_Penabur from '../Assets/BPK_Penabur.jpg';
import CUHK from '../Assets/CUHK.png';

export const portfolioData = {
  name: "Michael Richard Suryajaya",
  initials: "MR",
  description: "CS student at CUHK (Algorithms & Complexity).",
  about_me: "I was born in Indonesia and now study [Computer Science in Hong Kong](/#education), where most of my adventures happen from behind a screen. I'm the kind of person who builds [a Discord bot](/#projects) to track currency exchange rates just because the idea popped into my head and wouldn't leave. That's how most things start for me: a spark of curiosity, a few hours of research, and suddenly I'm knee-deep in APIs and documentation. Growing up, I was always drawn to math, tech, and anything that made me ask \"how does this work?\" That curiosity didn't stay confined to one field—it pulled me into education, psychology, and even productivity systems. I love learning how people think, how systems scale, and how ideas evolve. I'm not just interested in building things—I want to understand the logic behind them. These days, I spend most of my time coding and occasionally falling down rabbit holes of niche topics. I'm a stay-at-home kind of person, happiest when I'm deep in a project, exploring a new concept, or just tinkering with something that might turn into something bigger. Curiosity isn't just part of me—it's the reason I keep moving forward.",
  avatarUrl: Photo,

  contact: {
    email: "michael.richard.suryajayaa@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Verizent",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/michael-richard-suryajaya",
      },
    },
  },

  work: [
    {
      id: 0,
      company: "Hong Kong Science and Technology Parks (HKSTP)",
      href: "https://www.hkstp.org",
      location: "Hong Kong",
      title: "AI & Data Placement (Incoming)",
      logoUrl: null,
      start: "Jun 2026",
      end: "Dec 2026",
      description: [
        "Supporting platform operations, data project execution, and ecosystem research on global AI & data trends across Hong Kong's innovation ecosystem."
      ],
    },
    {
      id: 1,
      company: "INAkademia",
      href: "https://www.inakademia.com",
      location: "Remote",
      title: "Full Stack Web Developer",
      logoUrl: INAkademia,
      start: "Sep 2023",
      end: "Jan 2026",
      description: [
        "Architected and built the organisation's first full-stack web platform using the MERN stack (active development Apr – Aug 2025).",
        "Designed backend APIs, MongoDB schemas, secure authentication, and a responsive React frontend serving 250+ users.",
        "Platform launch supported 115% YoY growth in program sign-ups."
      ],
    },
  ],

  activities: [
    {
      id: 0,
      company: "INAkademia",
      href: "https://www.inakademia.com",
      location: "Remote",
      title: "Head of Summer Bridge Program",
      logoUrl: INAkademia,
      start: "Mar 2025",
      end: "Jul 2025",
      description: [
        "Led a one-month online program delivering 6 subject classes to 200+ participants.",
        "Drove 115% YoY enrollment growth through curriculum design and outreach coordination."
      ],
    },
    {
      id: 1,
      company: "PPI Hong Kong",
      href: "https://www.ppihongkong.org",
      location: "Hong Kong",
      title: "Co-Director, Multimedia & Marketing",
      logoUrl: null,
      start: "Sep 2025",
      end: "Present",
      description: [
        "Directing multimedia for a 1,000+ member Indonesian student organisation in Hong Kong."
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
      start: "Sep 2024",
      end: "Jun 2028",
      description: [
        "GPA: 3.81/4.00 · Dean's List 2024/25",
        "Scholarships: University Admissions Scholarship (2024–2028), Honors at Entrance (2024), Liao Yuan Tung Memorial Scholarship (2025/26)",
        "Relevant Coursework: Data Structures & Algorithms, Probability, Statistics, Linear Algebra, Discrete Mathematics, Computer Organization & Design, Calculus"
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
      title: 'Algorithmic Trading Competition',
      dates: "Mar 2026",
      description: 'Competed in a real-time crypto trading simulation (Roostoo) as part of a team. Developed and backtested trading strategies using historical price data and Python on AWS.',
      technologies: ["Python", "AWS"],
      links: [],
    },
    {
      title: 'Online Exam Invigilator System',
      dates: "Oct – Nov 2024",
      description: '1st place at PwC Hack A Day 2024, representing CUHK across Hong Kong and Macau universities. Built the React frontend for a live exam monitoring system powered by AWS Rekognition for real-time facial analysis and cheat detection.',
      technologies: ["React.js", "Java", "AWS", "Docker"],
      links: [],
    },
    {
      title: 'INAkademia Platform',
      dates: "Apr – Aug 2025",
      description: 'Full-stack educational platform serving 250+ users. Designed and built end-to-end using the MERN stack with backend APIs, MongoDB schemas, and secure authentication.',
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      links: [
        { type: "Website", href: 'https://www.inakademia.com' }
      ],
    },
    {
      title: 'HKD to IDR Discord Bot',
      dates: "Jul 2025",
      description: 'A Discord bot that integrates with a currency exchange rate API to track and report HKD to IDR fluctuations, equipped with custom commands functionalities.',
      technologies: ["Python", "Discord.py"],
      links: [
        { type: "Source", href: 'https://github.com/Verizent/IDinHK' }
      ],
    },
  ],

  awards: [
    {
      title: '1st Place — PwC Hack A Day 2024',
      issuer: 'PwC China · CUHK Representative, HK & Macau',
      year: '2024',
    },
    {
      title: "Dean's List 2024/25",
      issuer: 'The Chinese University of Hong Kong',
      year: '2025',
    },
    {
      title: 'Liao Yuan Tung Memorial Scholarship',
      issuer: 'The Chinese University of Hong Kong',
      year: '2025/26',
    },
    {
      title: 'University Admissions Scholarship',
      issuer: 'The Chinese University of Hong Kong',
      year: '2024–2028',
    },
    {
      title: 'Honors at Entrance',
      issuer: 'The Chinese University of Hong Kong',
      year: '2024',
    },
  ],

  music: {
    worship: [
      {
        title: 'The Blessing',
        artist: 'Elevation Worship, Kari Jobe, Cody Carnes',
        spotifyUrl: 'https://open.spotify.com/track/5O306r2a9Nl7rm5ZlaTqka?si=e44784f1a881456f'
      },
      {
        title: 'Worthy is the Lamb',
        artist: 'Hillsong Worship',
        spotifyUrl: 'https://open.spotify.com/track/4vQW0xTLnsTYT1jLT2cH5P?si=2e623ea0fc7a4ec5'
      },
      {
        title: 'See a Victory',
        artist: 'Elevation Worship',
        spotifyUrl: 'https://open.spotify.com/track/3gtqd9P8kZblHf4I7Ybub2?si=2f4c7020764945a3'
      },
    ],
    pop: [
      {
        title: 'There\'s Nothing Holding me Back',
        artist: 'Shawn Mendes',
        spotifyUrl: 'https://open.spotify.com/track/7JJmb5XwzOO8jgpou264Ml?si=30cec22d6e5a4adb'
      },
      {
        title: '像晴天像雨天',
        artist: 'Silence Wang',
        spotifyUrl: 'https://open.spotify.com/track/298LjjcBvuQCAlwUWb9dKb?si=bf839921b44f4b45'
      },
      {
        title: 'High Hopes',
        artist: 'Panic! At The Disco',
        spotifyUrl: 'https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom?si=36df22bc6fc74c23'
      },
      {
        title: 'This Is Me',
        artist: 'Keala Settle, The Greatest Showman',
        spotifyUrl: 'https://open.spotify.com/track/45aBsnKRWUzhwbcqOJLwfe?si=ba1ee18fb5b44f24'
      },
      {
        title: 'Kejar Mimpi',
        artist: 'Maudy Ayunda',
        spotifyUrl: 'https://open.spotify.com/track/1ACIq7dH1SX4yXhyPoAVKu?si=60d76153b7e145e6'
      },
      {
        title: 'Can\'t Take My Eyes Off You',
        artist: 'Frankie Valli',
        spotifyUrl: 'https://open.spotify.com/track/6ft9PAgNOjmZ2kFVP7LGqb?si=2ad4205f748b4dfc'
      },
    ],
    jazz: [
      {
        title: 'Fly Me to the Moon',
        artist: 'Frank Sinatra, Count Basie',
        spotifyUrl: 'https://open.spotify.com/track/7FXj7Qg3YorUxdrzvrcY25?si=d24345b6701c48d0'
      },
      {
        title: 'Feeling Good',
        artist: 'Anthony Newley, Leslie Bricusse; covered by Michael Bublé',
        spotifyUrl: 'https://open.spotify.com/track/1AM8QdDFZMq6SrrqUnuQ9P?si=ac575a03f9044d13'
      },
    ],
  },
};
