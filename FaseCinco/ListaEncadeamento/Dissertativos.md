## Encadeamento

1. O que é um se encadeado?
_Resposta:_ **Quando há uma sequência de 'ses', onde o 'se' mais interno só é executado se o 'se' anterior for verdadeiro, sistema que pode ser repetido 'n' vezes.**

2. Para um condicional com dois “se”s e um senão, a qual if o else está vinculado (interno ou externo)?
_Resposta:_ **O else está vinculado ao if mais interno, pois é a unica forma de estarem encadeados.**

3. É possível inverter esse vínculo?
_Resposta:_ **É possível, mas as condicionais não estariam mais encadeadas, cada condicional seria independente.**


## Seletor de escolha (caso)

1. Qual a semelhança entre os seletores “se” e “escolha”?
_Resposta:_ **Ambos só executam determinadas ações, se as condições escolhidas forem atendidas.**

2. Com quais tipos de dados posso utilizar o switch? (JS e demais linguagens)
_Resposta:_ **Qualquer tipo de dados ordinais.**

3. É necessário o uso de blocos para conjuntos de instruções?
_Resposta:_ **Não há necessidade de colocar as instruções dentro de um bloco de comando, mas é possível colocar mais de uma instrução para o mesmo caso, apenas as separando por ponto-e-virgula, e linhas(boa prática).**

4. Porquê as instruções posteriores ao caso atendido também são executadas?
_Resposta:_ **Porque todas as instruções serão executadas dentro de um "switch" a menos que exista alguma instrução específica para que as instruções posteriores parem de ser lidas.**

5. Qual a função do break?
_Resposta:_ **A função do break é interromper a leitura da sequencia de instruções do switch, para que as instruções a seguir sejam puladas.**

6. Como relacionar várias alternativas a um mesmo conjunto de instruções?
_Resposta:_ **Mantendo todos os casos pertencentes a um unico break, primeiro listamos todas as alternativas envolvidas em sequencia, posteriormente colocamos todas as instruções em seguida, e ao final das instruções relacionadas a todas as alternativas em questão, eu utilizo um break para separa-las das demais alternativas.**

7. Como criar uma alternativa para “nenhuma das anteriores”?
_Resposta:_ **Utilizamos a alternativa "default", que significa justamente que nenhuma das alternativas anteriores foi relacionada com o caso específico.**

8. Cite exemplos de quando usar e quando não usar um seletor caso.
_Resposta:_ **Não devemos utilizar um seletor, quando não temos alternativas constantes, ou quando o tipo de dado não é ordinal. E devemos utilizar quando as alternativas possíveis forem constantes, ou quando o tipo de dado é ordinal por exemplo.**


