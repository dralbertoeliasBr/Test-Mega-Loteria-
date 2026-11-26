# ADENDO 02 — Descoberta com os ganhadores (26/11/2026, 18h25)
Base: 3090 concursos com nº de ganhadores por faixa (github marcosfland/mega_sena_estatistico).
Método: ganhadores de cada concurso divididos pela mediana dos 20 concursos vizinhos (tira o efeito da época e do volume de apostas).

Dezenas até 31 (que podem ser data) no sorteio -> ganhadores em relação ao normal (mediana):
| até 31 | quadra | quina | sena teve ganhador |
| 1 de 6 | 0,70x | 0,63x | 13% |
| 3 de 6 | 0,99x | 1,00x | 22% |
| 5 de 6 | 1,39x | 1,47x | 25% |
| 6 de 6 | 1,90x | 2,57x | 52% (40 sorteios) |

Leitura: o sorteio é justo, mas as PESSOAS não são aleatórias — muita gente joga datas.
Quando sai tudo até 31, a quina tem 2,6x mais ganhadores: o prêmio é dividido com muito mais gente.
Consequência para a 5ª cartela (datas): a chance de acertar é a mesma; o que muda é que, se acertar, divide com mais gente.
Cuidado: os maiores picos (2955, 2810, 2670, 2440, 2110) parecem concursos especiais de volume muito maior (provável Mega da Virada) — não conferido.
Ideia para o MEGA LAB: aba "Com quem eu dividiria?" — estima quantas pessoas jogaram parecido com a cartela.
