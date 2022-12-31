import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "bg-primary": "#0144A7",
                "text-white": "#FFFFFF",
                "text-black": "22272E",
                "text-primary": "006EF0",
            },
        },
    },
};
