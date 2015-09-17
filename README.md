# a11y-toolkit
Toolkit with JavaScript utilties for making accessible Web apps.

Inspired by:
* [a11y_kit](https://github.com/patrickfox/a11y_kit] & (https://vimeo.com/117614181)[https://vimeo.com/117614181)
* [a11y_announcer](a11y-announcer)
* [ngA11y](https://github.com/dequelabs/ngA11y)

## Why not any of these other projects?
They all have dependencies on jQuery, Ember, Angular, etc. This is a stripped-down version written in plain old JavaScript.

# Installation
Currently only installable with NPM:
```
npm install jasonblanchard/a11y-toolkit --save
```

# Usage
## Announce
###Example
```javascript
import a11yToolkit from 'a11y-toolkit';

a11yToolkit.announce('About page loaded', 'polite');
```

###Params
* `@message: string` - message to be announced
* `@manner: ['polite'(default), 'assertive']` - ARIA manner is which message is announced
