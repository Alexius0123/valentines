// Create style for floating animation if it doesn't exist
if (!document.getElementById("floating-hearts-style")) {
  const style = document.createElement("style");
  style.id = "floating-hearts-style";
  style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) scale(1);
            }
            50% {
                transform: translateY(-100vh) scale(0.8);
            }
        }
    `;
  document.head.appendChild(style);
}

class FloatingHearts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${5 + Math.random() * 7}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: 0.1 + Math.random() * 0.3,
        fontSize: `${1 + Math.random() * 1.5}rem`,
      })),
    };
  }

  render() {
    return React.createElement(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        },
      },
      this.state.hearts.map((heart) =>
        React.createElement(
          "div",
          {
            key: heart.id,
            style: {
              position: "absolute",
              left: heart.left,
              bottom: "-20px",
              animation: `float ${heart.animationDuration} linear infinite`,
              animationDelay: heart.animationDelay,
              opacity: heart.opacity,
              fontSize: heart.fontSize,
              color: "#ff69b4",
            },
          },
          "❤️"
        )
      )
    );
  }
}

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("floating-hearts-root");
  if (root) {
    ReactDOM.render(React.createElement(FloatingHearts), root);
  }
});
