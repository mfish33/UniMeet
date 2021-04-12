const shell = require('shelljs')

const { name, version } = require('./package.json')
let remoteVersionInfo = shell.exec(`npm view ${name}`).split('\n').find(s => s.includes('latest'))
if(!remoteVersionInfo.includes(version)) {
    shell.exec('npm publish')
}