/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Dark_Violet: "hsl(256, 26%, 20%)",
                c_Grayish_Blue: "hsl(216, 30%, 68%)",
                c_Very_Dark_Violet: "hsl(270, 9%, 17%)",
                c_Dark_Grayish_Violet: "hsl(273, 4%, 51%)",
                c_Very_Light_Gray: "hsl(0, 0%, 98%)",
            },
            fontFamily: {
                dm: ["DM Serif Display", "serif"],
                karla: ["Karla", "system-ui"]
            }
        },
    },
    plugins: [],
}

