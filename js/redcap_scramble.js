
/**
 * REDCap Scramble
 */
// @ts-check
;(function() {

//#region Variables and Initialization

if (typeof window['REDCap'] == 'undefined') {
    window['REDCap'] = {
        EM: {}
    };
}
if (typeof window['REDCap']['EM'] == 'undefined') {
    window['REDCap']['EM'] = {
        RUB: {}
    };
}
if (typeof window['REDCap']['EM']['RUB'] == 'undefined') {
    window['REDCap']['EM']['RUB'] = {};
}
window['REDCap']['EM']['RUB']['REDCapScramble'] = {
    init: init,
};

let config;

function init(data) {
    config = data;
    console.log('Scrambled', config);
}

//#endregion


})();