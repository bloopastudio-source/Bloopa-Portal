import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#E55A2E",
        peach: "#F8D5C8",
        card: "#FBE9E2",
        charcoal: "#1E1E1E",
        textDark: "#2A2A2A",
        textLight: "#FFFFFF",
        muted: "#8A8A8A"
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(30, 30, 30, 0.08)"
      },
      borderRadius: {
        xl: "18px"
      }
    }
  },
  plugins: []
};

export default config;
