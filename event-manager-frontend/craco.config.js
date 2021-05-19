const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            ...getThemeVariables({
                                dark: true, // Enable dark mode
                                compact: true, // Enable compact mode
                            }),
                            'primary-color': '#722ed1',
                            'link-color': '#d3adf7',
                            'border-radius-base': '3px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
