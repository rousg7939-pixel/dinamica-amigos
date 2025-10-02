import { useState } from "react";

export default function Home() {
  const [soldNumbers, setSoldNumbers] = useState([]);

  const toggleNumber = (num) => {
    if (soldNumbers.includes(num)) {
      setSoldNumbers(soldNumbers.filter((n) => n !== num));
    } else {
      setSoldNumbers([...soldNumbers, num]);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f0fa", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#6a0dad", textAlign: "center" }}>🎉 Gran Dinámica Solidaria 🎉</h1>
      <p style={{ textAlign: "center", fontSize: "18px" }}>Apoya y participa para llevarte jugosos premios ✨</p>

      <h2 style={{ marginTop: "30px", color: "#6a0dad" }}>🏆 Premios</h2>
      <ul>
        <li>1er Premio: 50 soles</li>
        <li>2do Premio: 50 soles</li>
        <li>3er Premio: 100 soles</li>
        <li>4to Premio: 100 soles</li>
        <li>Gran Premio Final: 3000 soles</li>
      </ul>

      <p><strong>📌 Precio:</strong> 10 soles por número</p>
      <p><strong>🎯 Números disponibles:</strong> 120</p>
      <p><strong>📺 Sorteo en vivo:</strong> TikTok @kassandra_style_studio</p>

      <h2 style={{ marginTop: "30px", color: "#6a0dad" }}>🔢 Elige tu número</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "5px", marginTop: "20px" }}>
        {Array.from({ length: 120 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => toggleNumber(num)}
            style={{
              padding: "10px",
              backgroundColor: soldNumbers.includes(num) ? "#6a0dad" : "white",
              color: soldNumbers.includes(num) ? "white" : "black",
              border: "1px solid #6a0dad",
              borderRadius: "5px",
              cursor: "pointer",
              textDecoration: soldNumbers.includes(num) ? "line-through" : "none",
            }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
