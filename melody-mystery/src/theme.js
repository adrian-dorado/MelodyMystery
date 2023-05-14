import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
};

const colors = {
    c: {
        spotifyGreen: '#1DB954',
        carrOrange: '#f18f01',
        turqGreen: '#a8d4ad',
        lemonYellow: '#f2f79e',
        maxYellow: '#e8ec67',
    },
};

const breakpoints = {
    'sm': '320px',
    'md': '400px',
    'lg': '520px',
    'xl': '800px',
    'xxl': '1280px',
    'xxxl': '1920px',
};

const fonts = {
    f: {
        heading: 'Amatic SC',
        paragraph: 'Amatic SC',
    }
};

const theme = extendTheme({ config, colors, fonts, breakpoints });

export default theme;
