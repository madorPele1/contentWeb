const torotLinks = [
  { name: 'קישור 1', url: 'https://example.com/torah1' },
  { name: 'קישור 2', url: 'https://example.com/torah2' },
];

export default function TorotPage() {
  return (
    <div>
      <h2>תורות</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', display: 'inline-block' }}>
        <h3>כל הקישורים:</h3>
        {torotLinks.map((link, i) => (
          <div key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
