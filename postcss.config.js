/** @type {import('postcss-load-config').Config} */
module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano: {
            preset: 'default',
        },
        'postcss-preset-env': {},
    },
};
