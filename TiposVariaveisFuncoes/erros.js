console.time()
try {
  functiona()
} catch (error) {
  console.error(new Error('\u274C Esta função não existe'));
}
console.timeEnd()
