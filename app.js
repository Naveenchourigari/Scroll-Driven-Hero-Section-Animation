const { useEffect, useRef } = React;

function App() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ======================
    // Intro Animation
    // ======================

    gsap.from(headlineRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(statsRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      ease: "power3.out"
    });

    // ======================
    // Scroll Animation
    // ======================

    gsap.to(visualRef.current, {
      y: -250,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2
      }
    });

  }, []);

  return (
    React.createElement("div", null,

      React.createElement("section", { className: "hero", ref: heroRef },

        React.createElement("h1", {
          className: "headline",
          ref: headlineRef
        }, "W E L C O M E I T Z F I Z Z"),

        React.createElement("div", {
          className: "stats",
          ref: statsRef
        },

          React.createElement("div", { className: "stat" },
            React.createElement("h2", null, "98%"),
            React.createElement("p", null, "Client Satisfaction")
          ),

          React.createElement("div", { className: "stat" },
            React.createElement("h2", null, "120+"),
            React.createElement("p", null, "Projects Delivered")
          ),

          React.createElement("div", { className: "stat" },
            React.createElement("h2", null, "24/7"),
            React.createElement("p", null, "Support")
          )
        ),

        React.createElement("div", {
          className: "visual",
          ref: visualRef
        })

      ),

      React.createElement("section", { className: "extra" },
        "Scroll To See Animation"
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);