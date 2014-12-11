/*
 * grunt-wakeup
 * https://github.com/dominikwilkowski/grunt-wakeup
 *
 * Copyright (c) 2014 Dominik Wilkowski
 * Licensed under the MIT license.
 */

'use strict';

//dependencies
var chalk = require('chalk');
var exec = require('exec');
var path = require('path');
var fs = require('fs');

//get random value off of an object
function randomize( obj ) {
	var j = 0,
		i = Math.floor(Math.random() * (Object.keys(obj).length)),
		result;

	for(var property in obj) {
		if(j === i) {
			result = property;
			break;
		}

		j++;
	}

	return result;
}


//grunt plugin
module.exports = function(grunt) {

	grunt.registerMultiTask('wakeup', 'Add soothing sound notification to your grunt watch', function() {

		var $sounds = { //array of all included sounds
			'bloom': './sounds/bloom.mp3',
			'concern': './sounds/concern.mp3',
			'connected': './sounds/connected.mp3',
			'full': './sounds/full.mp3',
			'gentle-roll': './sounds/gentle-roll.mp3',
			'high-boom': './sounds/high-boom.mp3',
			'hollow': './sounds/hollow.mp3',
			'hope': './sounds/hope.mp3',
			'jump-down': './sounds/jump-down.mp3',
			'jump-up': './sounds/jump-up.mp3',
			'looking-down': './sounds/looking-down.mp3',
			'looking-up': './sounds/looking-up.mp3',
			'nudge': './sounds/nudge.mp3',
			'picked': './sounds/picked.mp3',
			'puff': './sounds/puff.mp3',
			'realization': './sounds/realization.mp3',
			'second-glance': './sounds/second-glance.mp3',
			'stumble': './sounds/stumble.mp3',
			'suspended': './sounds/suspended.mp3',
			'turn': './sounds/turn.mp3',
			'unsure': './sounds/unsure.mp3',
		};


		var OPTIONS = this.options({ //default options
			sound: this.options.sound || 'looking-up',
			randomize: false,
			custom: '',
			volume: 0,
		});

		OPTIONS.sound = $sounds[ OPTIONS.sound ]; //get build in path


		if( OPTIONS.randomize ) { //randomize the sounds

			if( Array.isArray( OPTIONS.randomize ) ) { //randomize your own sounds
				var newPath = OPTIONS.randomize[ Math.floor( Math.random() * OPTIONS.randomize.length ) ].replace(/ /g, '\\ ');

				if( fs.lstatSync(newPath).isFile() ) {
					OPTIONS.sound = newPath;
				}
			}

			if( OPTIONS.randomize === true ) { //randomize defaults
				OPTIONS.sound = $sounds[ randomize($sounds) ];
			}
		}

		if( OPTIONS.custom.length > 0 ) { //custom sound
			var newPath = OPTIONS.custom.replace(/ /g, '\\ ');

			if( fs.lstatSync(newPath).isFile() ) {
				OPTIONS.sound = newPath;
			}
		}

		var $command = 'afplay ' + OPTIONS.sound + ( OPTIONS.volume === 0 ? '' : '  -v ' + OPTIONS.volume );

		var com = exec($command, function(err, stdout, stderr) { //execute command
			if(err instanceof Error) {
				grunt.warn(err);
			}
		});

		grunt.log.write("\n" + chalk.white.bgGreen.bold('  W A K E  U P  ') + "\n"); //feedback
	});

};