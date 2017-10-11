#!/usr/bin/env node

process.title = 'xu';

require('commander')
.version(require('../package').version)
.usage('<command> [options]')
.command('generate', 'generate file from a template (short-cut alias: "g")')
.parse(process.argv)


require('./xu-generate');