/**
 * Wrapper for Pretty Console Color for create consoles
 * with emojis, colors and date for improve the developer
 * experience.
 */

/**
 * @function formatDate
 *
 * @description This funcion get date now and format.
 *
 * @author Jose J Perez Rivas | JoseJPR
 *
 * @returns {string} - Return string with date formated.
 *
 * @example formatDate('myValue');
 */
const formatDate = function () {
  const date = new Date;
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  const seconds = `${date.getSeconds()}`.padStart(2, '0');
  const milliseconds = `${date.getMilliseconds()}`.padStart(3, '0');
  return hour + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

/**
 * Set main color for all type consoles.
 */
const colors = {
  Reset: "\x1b[0m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m"
};

const infoLog = console.info;
const logLog = console.log;
const warnLog = console.warn;
const errorLog = console.error;

/**
 * Set emojis, colors and date for console.log
 */
console.log = function (args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${formatDate()} ${colors.Reset}👀   [LOG]${colors.Reset}`);
  infoLog.apply(null,copyArgs);
}

/**
 * Set emojis, colors and date for console.info
 */
console.info = function (args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${formatDate()} ${colors.Green}☕️  [INFO]${colors.Reset}`);
  infoLog.apply(null,copyArgs);
};

/**
 * Set emojis, colors and date for console.warn
 */
console.warn = function (args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${formatDate()} ${colors.Yellow}⚠️   [WARN]${colors.Reset}`);
  warnLog.apply(null,copyArgs);
};

/**
 * Set emojis, colors and date for console.error
 */
console.error = function (args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${formatDate()} ${colors.Red}⁉️  [ERROR]${colors.Reset}`);
  warnLog.apply(null,copyArgs);
};
