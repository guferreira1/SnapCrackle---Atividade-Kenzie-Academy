function snapCrackle (maxValue){
    let mensagem = ''
  
    for (let i = 1; i < maxValue; i++){
        if(i % 5 == 0 && i % 2 !== 0 ) {
            mensagem = mensagem + 'SnapCrackle'
        }
        else if (i % 2 !== 0){
            mensagem = mensagem + 'Snap'
        }
        else if(i % 5 == 0) {
            mensagem = mensagem + 'Crackle'
        }
        else if(i % 2 == 0 && i % 5 !== 0) {
            mensagem = mensagem + i + ''
        } 
            mensagem = mensagem + ' , '
    }
    return mensagem
}
console.log(snapCrackle(12))
