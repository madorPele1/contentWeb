const lomdot = [
  {
    title: 'לומדה 1',
    image: '/barcode1.png',
    link: 'https://example.com/lomda1',
  },
  {
    title: 'לומדה 2',
    image: '/barcode2.png',
    link: 'https://example.com/lomda2',
  },
  {
    title: 'לומדה 3',
    image: '/barcode3.png',
    link: 'https://example.com/lomda3',
  },
  {
    title: 'לומדה 4',
    image: '/barcode4.png',
    link: 'https://example.com/lomda4',
  },
];

export default function LomdotPage() {
  return (
    <div>
      <h2>לומדות</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {lomdot.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>צפייה</button>
            </a>
            <div><img src={item.image} alt="Barcode" width="100" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
