// var studente = {
//   'nome': 'Matteo',
//   'cognome': 'Basile',
//   'anni': 25,
// };
//
// for (var key in studente ) {
//   console.log(studente[key]);
// }


var listaStudenti = [
  {
  'nome': 'Matteo',
  'cognome': 'Basile',
},
{
  'nome': 'mario',
  'cognome': 'rossi',
},
{
  'nome': 'gino',
  'cognome': 'paoli',
}
];


var nome = prompt('inserisci il tuo nome.');
var cognome = prompt('inserisci il tuo cognome.');
var età = parseInt(prompt('inserisci il tuo età.'));

listaStudenti.push({
    nome: nome,
    cognome: cognome,
    eta: età
});
console.log(listaStudenti);

if (parseInt(nome) || parseInt(cognome)) {
alert('non puoi inserire dei numeri');
}
if (isNaN(età)) {
  alert('devi inserire dei numeri');
}
