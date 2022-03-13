require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reward stereo coin grace depth furnace general'; 
let testAccounts = [
"0xfce618cb0dbed2273ae00eb70b51513d0beef12b7e65bd0f4522e63424fd74cd",
"0x8dfa25954d28522f324ac10a81553fee45f45750eb8e196aae469fb005abad82",
"0xe946ca3d4e6e8d051501b26b061d8bd3cf36701f67486bb1db50ab172dcdaec6",
"0x3326710be2bca9384ff1fbc1fdc8cf21d8533fbb8b0437732d7379837b2990f5",
"0x1a22475605a0eccb20ede523c2c324c43c7e6efd24281b59cf0acf6458935ff7",
"0xc301132ca72188b2920b25dc6505add67fead55adae9d1ba2fd77c08c5429759",
"0x13c8f85922f28b6e7bda7463d04b3ad7479a9ade97e9c421a655654a55218254",
"0x38776958108db5964679280656672019e3b2d1d9d8298f5174992d233937f2c3",
"0xbbf478f072e8c91cae6ffdd542e47ce45ead6ac2475e2636a5ffbc52568b49f6",
"0x78b30f1334157f467141396b3e9eb0deb1b4366a3c0d85c2af27332637c384d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


