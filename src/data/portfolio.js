import Photo from '../Assets/Photo.jpg';
import INAkademia from '../Assets/INAkademia.jpg';
import BPK_Penabur from '../Assets/BPK_Penabur.jpg';
import CUHK from '../Assets/CUHK.png';

export const portfolioData = {
  name: "Michael Richard Suryajaya",
  initials: "MR",
  description: "Full-Stack Developer & CS Student at CUHK. I love building things and helping people.",
  about_me: "I was born in Indonesia and now study [Computer Science in Hong Kong](/#education), where most of my adventures happen from behind a screen. I'm the kind of person who builds [a Discord bot](/#projects) to track currency exchange rates just because the idea popped into my head and wouldn't leave. That's how most things start for me: a spark of curiosity, a few hours of research, and suddenly I'm knee-deep in APIs and documentation. Growing up, I was always drawn to math, tech, and anything that made me ask \"how does this work?\" That curiosity didn't stay confined to one field—it pulled me into education, psychology, and even productivity systems. I love learning how people think, how systems scale, and how ideas evolve. I'm not just interested in building things—I want to understand the logic behind them. These days, I spend most of my time coding and occasionally falling down rabbit holes of niche topics. I'm a stay-at-home kind of person, happiest when I'm deep in a project, exploring a new concept, or just tinkering with something that might turn into something bigger. Curiosity isn't just part of me—it's the reason I keep moving forward.",
  avatarUrl: Photo,
  
  contact: {
    email: "mrichardsuryajaya@gmail.com",
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
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/michaelrichardsuryajaya",
      },
    },
  },

  work: [
    {
      id: 0,
      company: "INAkademia",
      href: "https://www.inakademia.com",
      location: "Remote",
      title: "Summer Program Lead & Web Developer",
      logoUrl: INAkademia,
      start: "Sep 2023",
      end: "Present",
      description: [
        "Headed the Summer Bridge program, aimed at preoccupying Indonesian soon-to-be freshmens with basic knowledge related to their majors or areas of interest during the summer holiday.",
        "Developed the organization's first official website using the MERN (MongoDB, Express.js, React.js, Node.js) stack, delivering a fully responsive and user-friendly experience across all devices."
      ],
    },
    {
      id: 1,
      company: "Smakonecup",
      href: "https://smakone.org",
      location: "Jakarta, Indonesia",
      title: "Web Developer",
      logoUrl: BPK_Penabur,
      start: "May 2023",
      end: "Oct 2023",
      description: [
        "Developed the official event website with React.js, enhancing digital engagement and user experience",
        "Implemented responsive, cross-browser design for seamless access across all devices"
      ],
    },
  ],
  
  education: [
    {
      id: 0,
      school: "The Chinese University of Hong Kong",
      href: "https://cuhk.edu.hk",
      degree: "BSc in Computer Science",
      logoUrl: CUHK,
      start: "Aug 2024",
      end: "Present",
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
      title: 'Online Exam Invigilator App',
      dates: "Oct - Nov 2024",
      description: 'A live exam monitoring app leveraging Amazon Rekognition for facial analysis and cheat detection (made for the PwC Hackathon).',
      technologies: ["Java", "AWS", "React"],
      links: [],
    },
    {
      title: 'INAkademia',
      dates: "Sep 2023 - Present",
      description: 'A non-profit platform that empowers students by offering free educational resources, mentorship, and a collaborative learning community.',
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      links: [
        { type: "Website", href: 'https://www.inakademia.com' }
      ],
    },
    {
      title: 'HKD to IDR Discord Bot',
      dates: "2025",
      description: 'A Discord bot that integrates with a currency exchange rate API to track and report HKD to IDR fluctuations, equipped with custom commands functionalities.',
      technologies: ["Python", "Discord.py"],
      links: [
        { type: "Source", href: 'https://github.com/Verizent/IDinHK' }
      ],
    },
    {
      title: 'AutoMeal Buddy',
      dates: "2024",
      description: 'A programmable Arduino-based pet feeder that allows users to set precise feeding times, ensuring pets are fed consistently even when their owners are away.',
      technologies: ["Arduino", "C++"],
      links: [
        { type: "Source", href: 'https://github.com/Verizent/Arduino-Time-Settable-Pet-Feeder' }
      ],
    },
  ],
  
  awards: [
    {
      title: 'PwC Hackathon Champion',
      issuer: 'PwC China',
      year: '2024',
    },
    {
      title: "Dean's List 2024-2025",
      issuer: 'The Chinese University of Hong Kong',
      year: '2025',
    },
    {
      title: 'Honors at Entrance 2024-2025',
      issuer: 'The Chinese University of Hong Kong',
      year: '2024',
    }
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
      {
        title: 'Can\'t Take My Eyes Off You',
        artist: 'Frankie Valli',
        spotifyUrl: 'https://open.spotify.com/track/6ft9PAgNOjmZ2kFVP7LGqb?si=2ad4205f748b4dfc'
      },
    ],
  },
};
