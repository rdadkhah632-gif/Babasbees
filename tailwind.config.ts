import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7ED",
        parchment: "#F3E9D3",
        honey: "#D79419",
        amber: "#A95E0B",
        olive: "#283126",
        sage: "#66705D",
        ink: "#1F211D",
      },
      boxShadow: {
        warm: "0 22px 60px rgba(72, 45, 13, 0.12)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 10%, rgba(215,148,25,.12), transparent 30%), radial-gradient(circle at 90% 80%, rgba(102,112,93,.12), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
