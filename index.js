const d = Date.now();

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

console.log = function(args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${d} ${colors.Reset}👀   [LOG]${colors.Reset}`);
  infoLog.apply(null,copyArgs);
}
console.info = function(args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${d} ${colors.Green}☕️  [INFO]${colors.Reset}`);
  infoLog.apply(null,copyArgs);
};

console.warn = function(args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${d} ${colors.Yellow}⚠️  [WARN]${colors.Reset}`);
  warnLog.apply(null,copyArgs);
};

console.error = function(args) {
  const copyArgs = Array.prototype.slice.call(arguments);
  copyArgs.unshift(`🕐 ${d} ${colors.Red}⁉️ [ERROR]${colors.Reset}`);
  warnLog.apply(null,copyArgs);
};