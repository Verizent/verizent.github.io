const awards = [
  {
    title: 'PwC Hackathon Champion',
    issuer: 'PwC China',
    year: '2024',
  },
  {
    title: 'Dean\'s List 2024-2025',
    issuer: 'The Chinese University of Hong Kong',
    year: '2025',
  },
  {
    title: 'Honors at Entrance 2024-2025',
    issuer: 'The Chinese University of Hong Kong',
    year: '2024',
  }
];

export default function Awards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
      {awards.map((award, idx) => (
        <div
          key={idx}
          className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight transition-colors duration-300">{award.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 font-medium transition-colors duration-300">{award.issuer} &bull; {award.year}</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors duration-300">{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
