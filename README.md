Demonstrates an eslint indentation bug. https://github.com/eslint/eslint/issues/16145

_script.js_
``` javascript
export default () => {
  let t = true,
      f = false

  [t, f] = [t, f].map(n => String(n))

  return [t, f]
}
```


```bash
eslint-repro-destructured-intent土$ npm start

> start
> eslint .


/home/bumble/software/eslint-repro-destructured-intent/script.js
  5:1   error  Expected indentation of 8 spaces but found 2  indent
  5:7   error  'f' was used before it was defined            no-use-before-define
  5:16  error  'f' was used before it was defined            no-use-before-define

✖ 3 problems (3 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

