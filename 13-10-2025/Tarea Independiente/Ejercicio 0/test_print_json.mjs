import { print_json_then } from "./print_json_then.mjs";
import { print_json_async } from "./print_json_async.mjs";

console.log("\n--- Versión con then/catch ---");
await print_json_then(1);

console.log("\n--- Versión async/await ---");
await print_json_async(2);

console.log("\n--- error esperado, usuario inexistente ---");
try {
  await print_json_async(9999); // 404
} catch (e) {
  console.log("OK, error capturado:", e.message);
}
