const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files =[
        './dist/my-element-a/runtime.js',
        './dist/my-element-a/polyfills.js',
        './dist/my-element-a/main.js'
    ]
    await concat(files, './dist/my-element-a.js')
})()