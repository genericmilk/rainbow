# 🌈 Rainbow
## By Genericmilk

A lightweight emoji system for textarea and input fields

Rainbow can be simply invoked by calling it against a DOM object and it will monitor changes and replace keystrokes to become emoji (ie `:)` becomes 🙂)

### To install

Simply include this script in your footer (After jQuery has loaded) (Or better still, using Cooker at https://github.com/genericmilk/cooker 😉 add it to the `/resources/js/libraries` folder)

### To use
Attach a Rainbow instance to an input by invoking it using the following:
```
r.attach($('textarea.comment'));
```
Rainbow will now watch `textarea.comment` for changes and will respond to ascii emoji symbols with the emoji counterpart.

If you'd rather parse an input yourself once rather than attaching a keyup listener, You can use the following
```
r.parse($('textarea.comment'));
```
This will call the parse event once and process the text in `textarea.comment`
