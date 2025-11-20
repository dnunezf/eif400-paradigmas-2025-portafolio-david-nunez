async function* complaint(sec) {
  let s = "Ay";
  while (true) {
    await new Promise((r) => setTimeout(r, sec * 1000));
    yield s;
    s += "y";
  }
}

async function main(max = 10) {
  const gen = complaint(2);
  for await (const s of gen) {
    console.log(s);
    if (s.length > max) break;
  }
}

main();
