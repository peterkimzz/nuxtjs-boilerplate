const moduleAlias = require('module-alias')

moduleAlias.addAliases({
  '@middleware': __dirname + '/../',
  '@mysql': __dirname + '/../mysql'
})
