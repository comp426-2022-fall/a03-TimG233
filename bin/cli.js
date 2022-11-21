#!/usr/bin/env node
// shebang set

import { roll } from "../lib/roll.js";
import minimist from 'minimist';

var args = minimist(process.argv.slice(2));

console.log(JSON.stringify(roll(args.sides, args.dice, args.rolls)));