/****************************************************
 * Chapter 54: Async/Await
 * Description: async function wrapper
 ****************************************************/

async function run() {
  const v = await Promise.resolve(10)
  console.log("awaited:", v)
}
run()
