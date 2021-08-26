
// A espada da persistência, é a melhor maneira de derrotar este monstro...

const prompt = require("prompt-sync")();


function armaInvalida(B){

    return (B != "Espada") && (B != "Sapato") && (B != "Faca");
}

console.log("Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!");
console.log("─────▄████▀█▄");
console.log("───▄█████████████████▄");
console.log("─▄█████.▼.▼.▼.▼.▼.▼▼▼▼");
console.log("▄███████▄.▲.▲▲▲▲▲▲▲▲");
console.log("████████████████████▀▀");
console.log("");

var bonus = 0;

do{

    console.log("Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪");

    var armaJogador = prompt("Qual arma você deseja utilizar para combater o Progradragão?");
    
    switch(armaJogador){
        
        case 'Sapato':
            bonus = 3;
            console.log("\nGeralmente não combatemos um Progradragão com " + armaJogador + ". Mas boa sorte!");
            break;
        case 'Faca':
            bonus = 6;
            console.log("\nNada mal, um jogador habilidoso com " + armaJogador + " combaterá o Progradragão!");
            break;
        case 'Espada':
            bonus = 9;
            console.log("\nA escolha mais sábia, também chamada de " + armaJogador + " da Persistência...");
            break;
        default:
            console.log("\nCom certeza " + armaJogador + " não serve para matar o Progradragão!");
    }
} 
while(armaInvalida(armaJogador))

do{
    var danoDragao = Math.round(Math.random()*9 + 1);

    console.log(danoDragao);
    
    var dragaovitorioso = bonus<danoDragao;

    console.log("Dano do Progradragão: " + danoDragao);
    console.log("Dano da sua arma: " + bonus);

    if(dragaovitorioso){
        console.log("AHHHHHHHHHH! O Progradragão te golpeou forte!");
        console.log("O ataque do dragão foi " + danoDragao + " e sua arma só possuia " +bonus+ " de defesa.");
        console.log("Seu bonus foi reduzido!\n ");
        bonus = bonus -1;
    } else if (danoDragao == bonus)
        console.log("Incrível! Vocês pensaram no mesmo movimento, e esquivaram os ataques!");
        else {  
        console.log("*SLASH* Sua arma foi capaz de ferir o Progradragão!");
        console.log("O ataque do dragão foi " + danoDragao + " e sua arma possuia " +bonus+ " de ataque.");
        console.log("Você está ficando mais forte...\n");
        bonus = bonus +1;
    }


}while(bonus>=0&&bonus<10)

if(bonus<0){

    switch(armaJogador){
    case 'Sapato':
        console.log("O Progradragão venceu a batalha..\n");
        console.log("O que você esperava o combatendo com um " + armaJogador + ". Te avisei!");
        break;
    case 'Faca':
        console.log("O Progradragão venceu a batalha..\n");
        console.log("Acontece, mesmo com  " + armaJogador + " , é preciso saber lutar.");
        break;
    case 'Espada':
        console.log("O Progradragão venceu a batalha..\n");
        console.log("A escolha mais sábia, as melhores chances, o azar venceu...");
        break;
    default:
        console.log("");
    }
}   
else{

    switch(armaJogador){
        case 'Sapato':
            console.log("É ISSO! VOCÊ VENCEU A BATALHA!!\n");
            console.log("Mesmo usando " + armaJogador + ". Você conseguiu uma vitória milagrosa!");
            break;
        case 'Faca':
            console.log("VOCÊ É O VENCEDOR!!!\n");
            console.log("A arma usada,  " + armaJogador + " , é intermediária, mas você soube usar.");
            break;
        case 'Espada':
            console.log("PROGRADRAGÃO SENTIU O PODER DA PERSISTÊNCIA!!\n");
            console.log("A escolha mais sábia, o resultado foi fruto da sua boa escolha!...");
            break;
        default:
            console.log("");
    }   
}
