const lomdot = [
  {
    title: 'לומדת חומ"ס לגדודים',
    image: "/contentWeb/media/gdudim.png",
    link: "https://madorpele1.github.io/HomasLomda/",
  },
  {
    title: 'מילון פקע"ר',
    image: "/contentWeb/media/milon.png",
    link: "https://madorpele1.github.io/pakarDictionary/",
  },
  {
    title: 'לומדת הע"ס',
    image: "/contentWeb/media/haas.png",
    link: "https://madorpele1.github.io/Aloha-Lomda/",
  },
  {
    title: 'לומדת יועמ"ש',
    image: "/contentWeb/media/yoamash.png",
    link: "https://madorpele1.github.io/Yoamash/",
  },
  {
    title: 'פנקס חומ"ס',
    image: "/contentWeb/media/pinkas.png",
    link: "https://madorpele1.github.io/homas-notebook/",
  },
];

export default function LomdotPage() {
  return (
    <div>
      <h2>לומדות</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {lomdot.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              height: "30%",
              minHeight: "50svh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontSize: "7.5vmin",
                color: "#333",
              }}
            >
              {item.title}
            </h3>
            <div>
              <img src={item.image} alt="Barcode" width="200" />
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  backgroundColor: " #13527a",
                  color: "white",
                  fontFamily: "assistant",
                  fontWeight: "600",
                  fontSize: "6vmin",
                  borderRadius: "20px",
                  width: "25vw",
                  height: "6vh",
                  border: "none",
                  margin: "2vh",
                }}
              >
                צפייה
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
