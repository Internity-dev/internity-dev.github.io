import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
};
