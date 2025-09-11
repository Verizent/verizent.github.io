import INAkademia from '../Assets/INAkademia.jpg'
import BPK_Penabur from '../Assets/BPK_Penabur.jpg'

const technical_experience = [
  {
    id: 0,
    logo: INAkademia,
    isLast: false,
    company_name: "INAkademia",
    duration: "September 2023 - Present",
    position: "Summer Program Lead & Web Developer",
    description_list: [
      "Headed the Summer Bridge program, aimed at preoccupying Indonesian soon-to-be freshmans with basic knowledge related to their majors or areas of interest during the summer holiday.",
      "Led development of the organization’s first official website using the MERN (MongoDB, Express.js, React.js, Node.js) stack, delivering a fully responsive and user-friendly experience across all devices."
    ] 
  },
  {
    id: 1,
    logo: BPK_Penabur,
    isLast: true,
    company_name: "Smakonecup",
    duration: "May 2023 - October 2023",
    position: "Web Developer",
    description_list: [
      "Developed the official event website with React.js, enhancing digital engagement and user experience",
      "Implemented responsive, cross-browser design for seamless access across all devices"
    ] 
  }
];

export default technical_experience;