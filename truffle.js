module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // eslint-disable-line camelcase
        },
    },
    compilers: {
        solc: {
            version: '0.5.8',
            docker: false,
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                evmVersion: 'constantinople',
            },
        },
    },
};
