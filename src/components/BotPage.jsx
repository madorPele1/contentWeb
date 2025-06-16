export default function BotPage() {
  return (
    <div>
      <h2
        style={{
          fontSize: "9vmin",
          color: "#333",
        }}
      >
        בוט חילוץ
      </h2>
      <img
        src="/contentWeb/media/bot.png"
        alt="Bot"
        style={{ width: "200px", margin: "1rem 0" }}
      />
      <br />
      <a
        href="https://landbot.pro/v3/H-1750201-H1P0KR9TBDSPX0RV/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            backgroundColor: " #13527a",
            color: "white",
            fontFamily: "assistant",
            fontWeight: "600",
            fontSize: "6vmin",
            borderRadius: "20px",
            width: "35vw",
            height: "6vh",
            border: "none",
            margin: "2vh",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          גישה לבוט
        </button>
      </a>
    </div>
  );
}
