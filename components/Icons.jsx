const icons = {
    arrow: () => (
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
    ),

    // 👇 podés ir agregando más iconos acá
    heart: () => (
        <path d="M12 21s-6-4.35-9-8.28C-1.5 7.5 2.42 2 7.5 5.09 9.24 6.16 12 9 12 9s2.76-2.84 4.5-3.91C21.58 2 25.5 7.5 21 12.72 18 16.65 12 21 12 21z" />
    ),

    user: () => (
        <path d="M12 12c2.76 0 5-2.46 5-5.5S14.76 1 12 1 7 3.46 7 6.5 9.24 12 12 12zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
    ),
};

const Icons = ({ name, size = 24, color = "#222", className = "" }) => {
    const IconPath = icons[name];

    if (!IconPath) {
        console.warn(`Icon "${name}" no existe`);
        return null;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            className={className}
        >
            {IconPath()}
        </svg>
    );
};

export default Icons;