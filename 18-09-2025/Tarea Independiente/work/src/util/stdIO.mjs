export function readAllFromStdin(encoding ='utf8') {
  return new Promise( resolve => {
    let data = ''
    process.stdin.setEncoding(encoding)
    process.stdin.on('data', chunk => (data += chunk))
    process.stdin.on('end', () => resolve(data))
  })
}