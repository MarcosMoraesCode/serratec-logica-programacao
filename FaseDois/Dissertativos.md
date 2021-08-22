1.	Para cada informação abaixo, classifique segundo o tipo de dados.
* a.	Quantidade de vendedores da loja: **Integer**
* b.	Nome da rua, com número e complemento: **String**
* c.	Preço do etanol comum: **Float**
* d.	Estado de iluminação de uma lâmpada: **Bolean**
* e.	CEP do endereço, com hífen: **String**
* f.	Mostrador com um dígito dentro do elevador, indicando o andar do prédio onde ele está passando: **Integer**
* g.	Led que indica o pressionamento do botão do elevador: **Bolean**
* h.	Data de aniversário do professor: **Date**
* i.	Peso do prato na balança do restaurante: **Float**
* j.	Número de bois no curral da fazenda: **Integer**
* k.	Dia completo da páscoa nesse ano: **Date**
* l.	Quantidade de laranjas na caixa: **Integer**
* m.	Uma vogal minúscula: **Char**
* n.	Título de um livro: **String**
* o.	Limite do cartão de crédito: **Float**
* p.	Horário de transmissão do jogo: **Date**
* q.	Altura de um prédio: **Float**
* r.	Páginas do caderno: **Integer**
* s.	Sala de reunião está disponível (ou ocupada):**Bolean**
t.	Alternativas do enunciado da questão de múltipla escolha: **Char**

2.	O que são tipos de dados?
_Resposta:_ **Se referem a forma como um programa irá entender o conteúdo que será armazenado, podendo ser primitivo ou composto.**

3.	Descreva os tipos de dados primitivos em programação, com o nome do tipo da informação e sua finalidade de armazenamento.
_Resposta:_
* **Um número inteiro, não considera as casas decimais, tem a finalidade de armazenar por exemplo a quantidade de clientes de um estabelecimento, ou alunos de uma escola.**
* **Um número real, considera as casas decimais, tem a finalidade de armazenar por exemplo medidas, como peso, altura, velocidade, etc...**
* **Um caractere, se refere a apenas uma letra, dígito ou símbolo, tem a finalidade de armazenar por exemplo alternativas de uma questão multipla escolha.**
* **Um texto, se refere a um conteudo de mais de um caractere, tem a finalidade de armazenar informações como título de um livro por exemplo.**
* **Uma data, sequência de números sequenciadas que tem a finalidade de armazenar uma data de algum acontecimento**
* **Um verdadeiro/falso, utilizado para armazenar respostas lógicas de verdadeiro ou falso, tem a finalidade de armazenar por exemplo o status de uma lampada, aceso/apagado.**

4.	Qual a característica (ou conceito) dos números inteiros que é muito importante na programação?
_Resposta:_ **O conceito de ordinalidade, de saber identificar qual é o próximo número, e o número anterior ao que estou utilizando.**

5.	O que são as palavras reservadas da linguagem?
_Resposta:_ **São palavras que não podem ser utilizadas como identificadores, pois já fazem parte da estrutura base da linguagem em questão.**

6.	Em programação, o que são variáveis?
_Resposta:_ **É um nome simbólico para representar um espaço na memória, onde iremos armazenar um valor, e esse valor pode ser alterado, e portanto, variar.**

7.	Como são chamados os nomes de variáveis?
_Resposta:_ **Os nomes de variáveis são chamados de identificadores, pois mostram ao programador sobre o que determinada variável se trata**

8.	O que significa “declarar uma variável”?
_Resposta:_ **Significa informar ao computador que precisaremos de um espaço na memória para armazenar seu conteúdo.**

9.	Posso criar duas variáveis como o mesmo “nome”, ou que, pelo menos para o programador, tenham o mesmo significado? Justifique.
_Resposta:_ **Duas variáveis não podem possuir o mesmo nome simbólico, pois se declaro uma variável como "var fruta", e atribuo a ela a string "morango", se em algum lugar a frente eu atribuir à variável fruta a string "melancia", ela irá tirar da memória o valor "morango", portanto, se quero manter os dois valores, preciso de variáveis distintas, nomeando por exemplo como "var fruta1" e "varfruta2". A não ser que a intenção seja realmente substituir o valor que a variável fruta possuía.**

10.	O que é uma atribuição?
_Resposta:_ **É quando uma variável recebe um valor, ou seja, atribuímos um valor a um identificador.**

11.	Qual palavra utilizamos como sinônimo do comando do sinal de atribuição?
_Resposta:_ **Utilizamos a palavra "receber" como sinônimo do sinal de atribuição que utilizamos na linguagem de programação.**

12.	Quando atribuímos um novo valor a uma variável, o que acontece com o valor que ela já possui?
a.	O primeiro valor é somado com o segundo valor.
b.	O primeiro valor vai para a variável seguinte.
**c**.	O primeiro valor é perdido, pois uma atribuição é uma substituição.

13.	Qual a diferença do “ponto” e da “vírgula” no momento da escrita do código?
_Resposta:_ **O ponto é utilizado para numeros decimais, e a vírgula para separação de variáveis dentro da escrita do código.**

14.	O comando de escrita no console permite “misturar” vários tipos de dados? Em outras palavras: É possível escrever os valores de mais de uma variável, de tipos diferentes? Justifique.
_Resposta:_ **Sim, é possível misturar vários tipos de dado em um único código, entretanto, cada variável só pode possuir um tipo de valor por vez, e dentro de uma unica linha ela deve ser separada por vírgulas.**

15.	Para quê usamos comentários na programação?
_Resposta:_ **Utilizamos os comentários para relembrar ou informar por exemplo alguma observação para outros programadores que estiverem trabalhando naquele mesmo arquivo, os comentários são precedidos de comandos que indicam que aquela linha ou seção não faz parte do código principal, de forma a ser diferenciado pela simples interpretação das linhas.**
16.	Quais os tipos de comentários existentes?
_Resposta:_ **Os tipos de comentários mais comuns utilizados em linguagens próximas ao C, Java ou Javascript são os comentários de linha única e os comentários em linhas múltiplas**