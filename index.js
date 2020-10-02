function criaArma(nome, skin,tipo){
    let arma = {}

    arma.nome = nome;
    arma.skin = skin;
    arma.tipo = tipo;

    function getNome(arma) {
        return arma.nome
    }
    function getSkin(arma) {
        return arma.skin
    }

    return {
        getNome,
        getSkin
    };
}



const ak47 = pegaArma("ak47","asiimov", "rifle");

const criaArma = (nome, skin, tipo) => {
    return pegaArma(nome, skin, tipo)
}

/*console.log(criaArma("ak47","asiimov", "rifle"));
console.log(pegaArma("ak47","asiimov", "rifle"));
console.log(ak47);*/

console.log(getNome(ak47))
console.log(getSkin(ak47))