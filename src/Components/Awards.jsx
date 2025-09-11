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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {awards.map((award, idx) => (
        <div
          key={idx}
          className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/40 transition-all duration-300 hover:scale-[1.02] p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">{award.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{award.issuer} &bull; {award.year}</p>
            <p className="text-gray-700 text-sm">{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
