
function null_weight_accumulator(notas) {
  return notas
    .map(([n, w]) => n == null ? w : 0)
    .reduce((a, b) => a + b)
}

function calc_nota_final(notas) {
  return notas
    .map(([n, w]) => n * w)
    .reduce((a, b) => a + b)
}

function mencoes(disciplina, notas) {
  const nota_final = calc_nota_final(notas)
  let peso_restante = null_weight_accumulator(notas)
  peso_restante = peso_restante == 0 ? 1 : peso_restante

  let mm = (5 - nota_final)/peso_restante
  let ms = (7 - nota_final)/peso_restante
  let ss = (9 - nota_final)/peso_restante

  mm = mm > 0 ? `${mm.toFixed(2)}` : 'Obtido'
  ms = ms > 0 ? `${ms.toFixed(2)}` : 'Obtido'
  ss = ss > 0 ? `${ss.toFixed(2)}` : 'Obtido'

  console.log('='*40)
  console.log(disciplina)
  console.log(`Nota atual: ${nota_final.toFixed(2)}`)
  console.log(`Precisa de x pontos para tirar...`)
  console.log(`MM: x >= ${mm}`)
  console.log(`MS: x >= ${ms}`)
  console.log(`SS: x >= ${ss}`)
  console.log('='*40)
}

function CN(p1, p2, p3, atv) {
  notas = [[p1, .3], [p2, .3], [p3, .3], [atv, .1]]
  mencoes('Cálculo numérico', notas)
}

function PE(p1, p2, p3) {
  notas = [[p1, .3], [p2, .3], [p3, .4]]
  mencoes('Probabilidade e Estatística', notas)
}

function ALG1(p1, p2, nq, nt) {
  notas = [[nq, .3*.4], [nt, .7*.4], [p1, .4*.6], [p2, .6*.6]]
  mencoes('Álgebra 1', notas)
}

function TP1(p1, p2, trab, atv) {
  notas = [[p1, .1], [p2, .1], [trab, .5], [atv, .3]]
  mencoes('Técnicas de Programação 1', notas)
}

const cn_p1 = 5.6
const cn_p2 = 7.2
const cn_p3 = null
const cn_atv = 0
CN(cn_p1, cn_p2, cn_p3, cn_atv)

const pe_p1 = 7
const pe_p2 = 10
const pe_p3 = 10
PE(pe_p1, pe_p2, pe_p3)

const a1_p1 = 5.8
const a1_p2 = null
const a1_nq = 9.2
const a1_nt = 6.831
ALG1(a1_p1, a1_p2, a1_nq, a1_nt)
// 9.9*.3*.4 + 6.831*.7*.4 + 5.8*.4*.6 + x*.6*.6

const tp1_p1 = 10
const tp1_p2 = null
const tp1_trab = 9.5
const tp1_atv = 10
TP1(tp1_p1, tp1_p2, tp1_trab, tp1_atv)



