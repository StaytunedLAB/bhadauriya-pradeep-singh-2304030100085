/****************************************************
 * Chapter 51: Error Handling
 * Description: try / catch / finally
 ****************************************************/

try {
  throw new Error("Demo error")
} catch (e) {
  console.log("Caught:", e.message)
} finally {
  console.log("Finally always runs")
}
