module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                customYellow: "#FEDB01",
            },
            fontFamily: {
                titilumWeb: ["Titillium Web", "sans-serif"],
            },
            fontSize: {
                "10xl": ["180px"],
            },
            letterSpacing: {
                widest: ".5em",
            },
            height: {
                event: "38rem",
            },
            animation: {
                fade: "fadeIn ease 3s",
                fadeFast: "fadeIn ease 0.5s",
                fadeMid: "fadeIn ease 1.5s",
                fadeRight: "fadeInRight ease-in 1.2s",
                fadeLeft: "fadeInLeft ease-in 1.2s",
                fadeTop: "fadeInTop ease-in 1.2s",
                fadeBottom: "fadeInBottom ease-in 1.2s",
                rotateDown: "rotateDown forwards 1.2s",
                rotateUp: "rotateUp forwards 1.2s",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                fadeInRight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-200px, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                    },
                },
                fadeInLeft: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(200px, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                    },
                },
                fadeInTop: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(0, -50px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                    },
                },
                fadeInBottom: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(0, 100px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0, 0)",
                    },
                },
                rotateDown: {
                    "0%": { transform: "rotate(0deg) translate(0, 0)" },
                    "100%": { transform: "rotate(45deg) translate(6px, 5px)" },
                },
                rotateUp: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(-45deg)" },
                },
            },
            transitionDuration: {
                2000: "2000ms",
                1500: "1500ms",
            },
            boxShadow: {
                buttonShadow: "5px 5px 10px rgba(0, 0, 0, 0.4)",
                cardShadow: "5px 5px 20px rgba(0, 0, 0, 0.15)",
            },
            screens: {
                lg: "1100px",
                xl: "1300px",
            },
        },
    },
    variants: {
        extend: {
            animation: ["motion-safe"],
        },
    },
    plugins: [],
};
