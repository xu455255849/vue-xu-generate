#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const xu = require('../src/generate');


/**
 * Usage.
 */

program
.command('generate')
.description('quick generate your file')
.alias('g')
.action(function(type, name){
    xu.run(type, name);
});
program.parse(process.argv);