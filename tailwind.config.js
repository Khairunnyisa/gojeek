/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      DMSans: ["DM Sans", "sans-serif"],

    },
    extend: {
      colors: {
        bg_primary: "#0F1F30",
        secondary: "#868282",
        black: "#000000",
        white: "#ffff",
        green: "#00880D",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1330px",
      },
      content: {
        oval: 'url("../images/banner-image-2.png")',
      },

      backgroundImage: {
        hero: "url(../../asset/hero-section.png)",
        white:"url(../../asset/bg-white.png)",
        section4:"url(../../asset/bg-section-4.png)",
        cardsection:"url(../../asset/card-gojek.png)",
        downloadsection:"url(../../asset/download-section.png)",
        exploresection:"url(../../asset/explore.png)",
        explorebg:"url(../../asset/bg-explore.png)",
        detailscreen:"url(../../asset/about-screen.png)",
        loginscreen:"url(../../asset/login-screen.png)",
        greendetail:"url(../../asset/green-detail.svg)",
        bluedetail:"url(../../asset/blue-detail.svg)",
        reddetail:"url(../../asset/red-detail.svg)",
        aboutheader:"url(../../asset/about-header-bg.webp)",
      },

      

      animation: {
        'spin-slow': 'spin 20s linear infinite',
    },
    },
  },
  variants: {},
  plugins: [],
};
