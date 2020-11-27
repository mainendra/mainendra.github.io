module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: ['@snowpack/plugin-webpack', '@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv', ["@snowpack/plugin-build-script", {"cmd": "postcss", "input": [".css"], "output": [".css"]}]],
    install: [
        /* ... */
    ],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        clean: true,
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
    },
};
