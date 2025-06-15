const torotLinks = [
  { name: 'קישור 1', url: 'https://example.com/torah1' },
  { name: 'קישור 2', url: 'https://example.com/torah2' },
];

export default function TorotPage() {
  return (
    <div>
      <h2
       style={{
          fontSize: "9vmin",
          color: "#333",
        }}>תורות</h2>
      <div  style={{
              padding: "1rem",
              background: "#ffffffc2",
              borderRadius: "20px",
              height: "30%",
              minHeight: "50svh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
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
