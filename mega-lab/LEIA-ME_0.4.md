# MEGA LAB 0.4 — 26/11/2026

Segue o "MEGA LAB — Projeto completo v1.0" (11/11/2026, conceito Sounavy). Arquivo novo; 0.2 e 0.3 intactas.
SHA-256: d72e60a10e4b54984303af2dfc3dc49764b1a065c8d99e1bf296d447a49af32c

## Novo em relação à 0.3
- Base: fonte e data de captura por concurso, registro de importações, impressão da base (FNV-1a), lacunas, divergência registrada sem sobrescrever.
- Ficha completa das 60 dezenas: total, ranking, z, janelas 10/20/50/100, intervalos (média, mediana, maior), pares e trios, geometria, leitura automática.
- Distribuições contra o acaso (conta exata ou Monte Carlo de 100.000 com semente fixa) + qui-quadrado: pares, primos, Fibonacci, consecutivos, repetição do anterior, soma, amplitude, linhas, colunas, quadrantes, 6 regiões, cruz X, matriz 3x3.
- Geometrias congeladas com ID: Q4-v1, R6-v1, LIN-v1, COL-v1, M33-v1, X-v1.
- Associações: top pares e trios com esperado; busca de par, trio ou quadra sob demanda.
- Regimes: marcos com categoria e fonte; comparação antes x depois.
- Hipóteses: 5 tipos, status (refutado/inconclusivo/candidato/replicado), correção de Bonferroni por base.
- Gerador: até 20 cartelas, modo diversificado, relatório de descartes.
- Chorão: IA livre/estatística/mista; partida simulada.
- Aprender: falácia do número atrasado.

## Testes (node testes_0.4.js): 60/60
Critérios da seção 19 do projeto v1.0: soma 6, paridade, associação = busca direta, incremental = recálculo, idempotência, divergência, geometria sem ambiguidade, combinatória (C(60,k), quina 1/154.518, quadra 1/2.332), reprodução, sem informação do futuro (5 hipóteses).
Calibração: em 1.300 bases aleatórias, o alarme falso a 1% foi 13/1.300 = 1,0%.
Correção feita durante o teste: casa rara do qui-quadrado (esperado < 5) passou a ser juntada à vizinha; antes gerava alarme falso.
Interface: Chrome sem tela, 390x844, todas as abas, zero erros de JavaScript.

## Não testado
iPhone real; base oficial real; carga online da Caixa.
## Não implementado ainda
Triângulos; pares menos frequentes e há mais tempo sem sair; fechamentos combinatórios; explicação por IA; instalação PWA (precisa endereço HTTPS, só com OK).
