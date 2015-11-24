grunt-wakeup
============

> Add soothing sound notification to your grunt watch so you don't need to watch the watch.

[![NPM](https://nodei.co/npm/grunt-wakeup.png)](https://nodei.co/npm/grunt-wakeup/)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wakeup --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wakeup');
```

## The "wakeup" task

### Overview
In your project's Gruntfile, add a section named `wakeup` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	wakeup: {
		wakeme: {},
	},
});
```


### Options


#### options.custom
Type: `String`  
Default value: none

You can use your own sound by providing a path to the file in this option.


#### options.randomize
Type: `Boolean` or `Array`  
Default value: `false`

This setting can either be enabled which will casue the task to randomize the build-in sound notifications or it can be an array
which then will be randomized. The array needs to include the paths for each sound file to be played.
Formats that are supported include `AIFF`, `WAV`, `MP3` and `M4A`.


#### options.sound
Type: `Boolean` or `String`  
Default value: `'looking-up'`

Chose from the below build-in sound notifications. You can switch sound completely off by setting this to `false`.

- `bloom`
- `concern`
- `connected`
- `full`
- `gentle-roll`
- `high-boom`
- `hollow`
- `hope`
- `jump-down`
- `jump-up`
- `looking-down`
- `looking-up` (default)
- `nudge`
- `picked`
- `puff`
- `realization`
- `second-glance`
- `stumble`
- `suspended`
- `turn`
- `unsure`


#### options.volume
Type: `Integer`  
Default value: `0`

**[DEPRICATED since 0.0.6]**  
Set the volume of your sound notification between `0` and `10`. `0` means the current system volume will be used and is the default setting.


#### options.notifications
Type: `Boolean`  
Default value: `false`

If you don't have your headphones on but still want to know when your grunt tasks has run. Turn system notifications on.


### Usage Examples

#### Default Options
In this example, the default options are used which will give you a nice easy shim.

```js
grunt.initConfig({
	wakeup: {
		wakeme: {
			options: {
				sound: 'looking-up', //build-in sound
				randomize: false, //randomize build-in sounds
				custom: '', //custom sound file
				volume: 0, //sound volume
				notifications: false, //system notifications
			},
		},
	},
});
```

#### Custom Options
Choose a [build in sound](#optionssound).

```js
grunt.initConfig({
	wakeup: {
		wakeme: {
			options: {
				sound: 'hollow',
			}
		},
	},
});
```

This is how you would set your own array of sounds that are then [randomized](#optionsrandomize).

```js
grunt.initConfig({
	wakeup: {
		wakeme: {
			options: {
				randomize: [
					'~/Library/Sounds/Grunt1.mp3',
					'~/Library/Sounds/Grunt2.mp3',
					'~/Library/Sounds/Grunt3.mp3',
					'~/Library/Sounds/Grunt4.mp3',
				],
			}
		},
	},
});
```

Or maybe you just one custom sound not [randomized](#optionsrandomize).

```js
grunt.initConfig({
	wakeup: {
		wakeme: {
			options: {
				custom: '~/Library/Sounds/Grunt1.mp3',
			}
		},
	},
});
```

You can also just randomize the [build-in sounds](#optionssound).

```js
grunt.initConfig({
	wakeup: {
		wakeme: {
			options: {
				randomize: true,
			}
		},
	},
});
```


Enabling the [notifications](optionsnotifications) and switching [sound](#optionssound) completely off.

```js
grunt.initConfig({
	wakeup: {
		wakeme: {
			options: {
				sound: false,
				notifications: true,
			}
		},
	},
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.0 - removed volume option, added system notifications, added option to turn sound off
* 0.0.5 - __dirname fixes
* 0.0.4 - path fixes
* 0.0.3 - dependency fixes
* 0.0.2 - refinements
* 0.0.1 - alpha test

## License
Copyright (c) 2014-2015 Dominik Wilkowski. Licensed under the [GNU GPLv2](https://github.com/dominikwilkowski/grunt-wakeup/blob/master/LICENSE).