let slashArr = ['|', '/', '-', '\\', '|'];
let delayTime = 100;

for (let i = 0; i < slashArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${slashArr[i]}`);
  }, delayTime += 200);
}
