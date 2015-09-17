# a11y-toolkit
Toolkit with JavaScript utilties for making accessible Web apps.

Inspired by:
* [a11y_kit](https://github.com/patrickfox/a11y_kit) (and [this great video presentation](https://vimeo.com/117614181))
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

This function requires a `<div>` element that stays on the page. It should not be created dynamically - it should be on the page on page load:

```html
<div id="a11y_announcer" aria-live="polite"></div>
```

To hide this in the UI but ensure that it will be read by screen readers, add a `visually-hidden` class and this CSS:
```css
.visually-hidden {
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden'
}
```
