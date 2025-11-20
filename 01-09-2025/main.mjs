import {Node, Num, Id} from  './ast.mjs';

// Casos de prueba
function test_case_0() {
    const n = new Node("add", 1, 1, 2, 3)
    console.log("Node=", n)

    const num = new Num(666)
    console.log("Num as Node=", num)
    console.log("Num.value()=", num.value)
    console.log("Num.toString()=", num.toString())

    const id = new Id("x")
    console.log("Id as Node=", id)
    console.log("Id.name()=", id.name)
    console.log("Id.toString()=", id.toString())
}

function main() {
    test_case_0()
}

main()