/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            keyframes: {
                "pulse-slow": {
                    '0%, 100%': {
                        transform: 'translateX(-100%)',
                    },
                    '50%': {
                        transform: 'translateX(100%)',
                    },
                },
            },
            animation: {
                "pulse-slow": "pulse-slow 3s ease-in-out infinite",
            },
        },
    },
}