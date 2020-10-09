// O tipo any é um tipo que nós não queremos utilizar
function showMessage(msg: any) {
    return msg;
}

console.log(showMessage([1, 2]));
