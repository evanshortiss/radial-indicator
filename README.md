# radial-indicator

This package is a fork of `radialIndicator` by Sudhanshu Yadav. 

I wanted to add TypeScript support and make it available via npm, but it
seemed unmaintained so forking was easier.

Notable changes:

* Version restarted at 1.0.0
* Added TypeScript support
* Removed AngularJS support
* Added standardjs linting/format
* Published on npm as `@evanshortiss/radial-indicator`
* Changed name from camel case to use hyphens


## Installation

Current install is from GitHub types branch. might publish to npm eventually.

```
npm install evanshortiss/radial-indicator#tyes -S
```

## TypeScript Usage


```ts
import radialIndicator from '@evanshortiss/radial-indicator'

// Can access interfaces as properties on the import
let indicator: radialIndicator.RadialIndicatorInstance|undefined

// Create a bar that goes from green to red
indicator = radialIndicator('#indicator-container', {
  initValue: 100,
  barColor: {
    100: '#33FF66',
    0: '#ff0000'
  },
  reverse: true,
  interpolate: true,
  radius: 30,
  fontColor: '#000'
})

// Set to 50% 
indicator.value(50)
```

# Original README Content (Still Relevant)

A simple and light weight circular indicator plugin.

Check demo and documentation on <a href="http://ignitersworld.com/lab/radialIndicator.html">http://ignitersworld.com/lab/radialIndicator.html</a>

<h3>Major updates</h3>

<strong>1.4.0</strong>
- Added option to support rendering in the opposite direction.

<strong>1.2.0</strong>
- Added option to allow user interaction on mouse and touch events.
- Added precision option to support float value.

<strong>1.1.0</strong>
- Fixed draw issue on ipad and android devices and added onAnimationComplete callback.
