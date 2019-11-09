# 🔰 JavaScript Documentation Standards
JSDoc is a markup language used to annotate JavaScript source code files. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating.

More info: [JSDoc](https://jsdoc.app/)

### SINGLE LINE COMMENTS
```js
// Extract the array values.
```

### MULTI-LINE COMMENTS
```js
/**
 * This is a comment that is long enough to warrant being stretched over
 * the span of multiple lines. You'll notice this follows basically
 * the same format as the JSDoc wrapping and comment block style.
 */
```

### CLASS
```js
/**
 * @class NameClass
 *
 * @description Example class that contain all methods.
 *
 * @author First and Last Name | Github User
 */
```

### FUNCTIONS
```js
/**
* @function nameFunction
*
* @description Example function that return all data.
*
* @author First and Last Name | Github User
*
* @param {string} key - The example key of this function.
*
* @returns {Promise<any>} - Example return promise.
*
* @example nameFunction('myValue');
*/
```

### INTERFACES
```js
/**
 * @interface InterfaceType
 *
 * @description This is the description of this interface.
 *
 * @author First and Last Name | Github User
 *
 * @property {string} key - The text to be shown on the screen.
 */
```