🧠 Processo de desenvolvimento

1. Ideia inicial

A proposta foi criar uma calculadora simples usando HTML, CSS e JavaScript, com foco em entender a interação entre interface e lógica.

---

2. Estrutura HTML

Criei dois campos de entrada para os números e botões para selecionar a operação.

Durante essa etapa, aprendi a utilizar atributos como:

- "id" para capturar elementos no JavaScript
- "onclick" para executar funções

---

3. Lógica em JavaScript

Implementei duas funções principais:

- "setOperacao(op)": define a operação escolhida (+ ou -)
- "calcular()": realiza o cálculo com base nos valores digitados

Também aprendi a converter valores usando:

Number()

---

⚠️ 4. Problemas encontrados

Durante o desenvolvimento enfrentei alguns erros importantes:

- Erro na definição do charset no HTML
- Dificuldade em capturar valores dos inputs
- Resultado não aparecia corretamente na tela
- Inicialmente só consegui implementar soma e subtração

---

✅ 5. Como resolvi

- Corrigi o HTML ("charset="UTF-8"")
- Usei "document.getElementById().value" para capturar os dados
- Usei "innerHTML" para exibir o resultado
- Testei passo a passo até identificar onde estava o erro

---

🚀 6. Melhorias futuras

- Adicionar multiplicação e divisão
- Melhorar o design com CSS
- Tornar a calculadora mais intuitiva
- Adicionar validação (ex: evitar divisão por zero)