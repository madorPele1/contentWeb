export default function BotPage() {
  return (
    <div>
      <h2>
        בוט חילוץ
      </h2>
      <div className="card">
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
            }}
          >גישה לבוט</button>
        </a>
      </div>


    </div>
  );
}
