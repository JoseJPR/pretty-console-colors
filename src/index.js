/**
 * Wrapper for Pretty Console Color for create consoles
 * with emojis, colors and date for improve the developer
 * experience.
 */

// Set main color for all type consoles.
const colors = {
  Reset: "\x1b[0m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m"
};

// Set local references for this type console logs.
const infoLog = console.info;
const logLog = console.log;
const warnLog = console.warn;
const errorLog = console.error;

/**
 * @function formatDate
 * @description This funcion get date now and format.
 * @author Jose J Perez Rivas | JoseJPR
 * @returns {string} - Return string with date formated.
 */
function formatDate() {
  const date = new Date();
  return String(date.getHours()).padStart(2, '0')
         + ':' + String(date.getMinutes()).padStart(2, '0')
         + ':' + String(date.getSeconds()).padStart(2, '0')
         + ':' + String(date.getMilliseconds()).padStart(3, '0');
}

/**
 * @function formatMessage
 * @description This funcion set message to show with log.
 * @author Jose J Perez Rivas | JoseJPR
 * @returns {object} - Return object with message formated.
 */
function formatMessage(arg, type, emoji, title) {
  const copyArgs = Array.prototype.slice.call(arg);
  copyArgs.unshift(`🕐 ${formatDate()} ${colors[type]}${emoji} [${title}]${colors.Reset}`);
  return copyArgs;
}

/**
 * Set emojis, colors and date for console type log, info, warn and error.
 */
console.log = function () { logLog.apply(null, formatMessage(arguments, 'Reset', '   ', 'LOG')); };
console.info = function () { infoLog.apply(null, formatMessage(arguments, 'Green', '☕️', 'INFO')); };
console.warn = function () { warnLog.apply(null, formatMessage(arguments, 'Yellow', '⚠️ ', 'WARN')); };
console.error = function () { errorLog.apply(null, formatMessage(arguments, 'Red', '⁉️', 'ERROR')); };
