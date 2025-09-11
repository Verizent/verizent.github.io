const awards = [
  {
    title: 'PwC Hackathon Champion',
    issuer: 'PwC China',
    year: '2024',
    // description: 'Gold Medalist in the National Olympiad, recognized for outstanding problem-solving and algorithmic skills.'
  },
  {
    title: 'Dean\'s List 2024-2025',
    issuer: 'The Chinese University of Hong Kong',
    year: '2025',
    // description: 'Selected as a global finalist for contributions to open-source projects and community mentoring.'
  },
  {
    title: 'Honors at Entrance 2024-2025',
    issuer: 'The Chinese University of Hong Kong',
    year: '2024',
    // description: 'Awarded for research on AI-driven cybersecurity solutions.'
  }
];

export default function Awards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {awards.map((award, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-1">{award.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{award.issuer} &bull; {award.year}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
