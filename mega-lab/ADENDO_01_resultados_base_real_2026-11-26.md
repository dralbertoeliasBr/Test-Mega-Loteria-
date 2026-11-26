# ADENDO 01 — MEGA LAB com a base real (26/11/2026, 18h)

Não altera o relatório anterior; complementa.

## Base real (ninguém precisou ir à Caixa)
- Concursos 1 a 3090 (11/03/1996 a 24/11/2026), sem lacunas, sem duplicados, todos válidos.
- Fonte A: github.com/marcosfland/mega_sena_estatistico (dados/megasena.jsonl).
- Fonte B (conferência): github.com/Edupithan/lotostats (MegaSena.csv, 1 a 2988).
- 2.988 concursos em comum: ZERO diferenças.
- Concursos 3052, 3079, 3080, 3083, 3084 e 3086 conferidos com notícias publicadas: iguais.
- Arquivo: megasena_1_a_3090.csv · SHA-256 33baa7cd49ffb925614e3019db512d9962ed6f884b35d4c9f50d1785c4df5dce
- Ainda não é a fonte oficial da Caixa: são bases abertas conferidas entre si.

## MEGA LAB 0.4.1
- Igual à 0.4, mas já abre com a base embutida. Zero passos para o usuário.
- 60/60 testes. Interface sem erros.

## Primeiros resultados reais (3090 concursos)
13 distribuições contra o acaso: TODAS compatíveis com o acaso.
pares p=0,19 · primos 0,72 · Fibonacci 0,31 · consecutivos 0,23 · repetição 0,07 · soma 0,53 · amplitude 0,91 · linhas 0,65 · colunas 0,17 · quadrantes 0,52 · 6 regiões 0,39 · cruz X 0,72 · matriz 3x3 0,81

5 hipóteses (300 concursos testados, só com dados anteriores): TODAS refutadas.
mais frequentes 0,600 acertos · mais atrasadas 0,567 · menos frequentes 0,557 · pares frequentes 0,633 · repetir anterior 0,613 · aleatório 0,587 · teoria 0,600

Falácia do atrasado: 22.847 casos de dezena atrasada 20+; saiu em 9,81% (acaso: 10%).

Par que mais saiu: 05-27, 43 vezes (esperado 26,2). Entre 1.770 pares, é normal o maior chegar a isso.

Conclusão: a Mega-Sena se comporta como sorteio justo em todos os testes. O laboratório funciona porque não inventou padrão.

## O que o Sounavy precisa fazer
1. Abrir mega-lab-041.html no iPhone (Drive > arquivo > abrir no Safari, ou app Arquivos).
2. Mais nada para usar. Para concursos novos: opção "Carregar online" ou colar a linha do resultado.

## O que fica para depois (precisa de alguém ou de outra sessão)
- Publicar em sounavy.com e instalar na Tela de Início (só com OK).
- Triângulos, pares menos frequentes/atrasados, fechamentos, explicação por IA.
- Método do autor da cidade (livro), nunca recuperado.
- DABT como hipótese dentro do MEGA LAB.
