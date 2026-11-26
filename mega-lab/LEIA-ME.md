# MEGA LAB 0.3 — 26/11/2026

Conceito: Sounavy (Antonio Alberto Lopes Elias). Engenharia: Claude.
Versão nova e separada. A 0.2 (mega-lab-02.html) e a paralela v1 não foram tocadas.

## O que tem
- Base histórica: importação CSV/texto, atualização incremental (não duplica), backup JSON, exportação CSV.
- Tentativa de carga online pela API da Caixa (pode ser bloqueada pelo navegador).
- 60 cards: vezes, desvio do esperado, atraso, companheiras mais frequentes.
- Pares/ímpares e quadrantes: real x teoria exata. Soma. Pares de dezenas. Comparação de períodos.
- Motor de hipóteses com contraprova: critério fixado antes (z > 2 contra aleatório), só usa concursos anteriores, se abstém com poucos dados. Catálogo guarda todos os estudos, inclusive negativos.
- Gerador com fixas, exclusões e filtro anti-padrão popular.
- Jogão do Chorão 2+4 / 4+2, registro antes do sorteio, conferência automática, placar.

## Testado (26/11/2026)
- 15/15 testes do núcleo em Node (teoria par/ímpar e quadrantes, parser, incremental, atraso, experimento, abstenção, gerador).
- Chrome sem tela em tela de iPhone (390x844): importação de 1.200 concursos sintéticos, reimportação sem duplicar, todas as abas, hipótese, gerador, Jogão com conferência, persistência após recarregar. Zero erros de JavaScript.

## NÃO testado
- No iPhone real/Safari.
- Carga online da Caixa (a rede do ambiente de teste não alcança a Caixa).
- Base real: os testes usaram dados sintéticos.
