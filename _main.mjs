// _main.mjs
// https://github.com/jcbhmr/runs-using-deno
const response = await fetch("https://unpkg.com/runs-using-deno@1");
const buffer = Buffer.from(await response.arrayBuffer());
await import(`data:text/javascript;base64,${buffer.toString("base64")}`);