// Snack 1

// const valore: unknown = await prendiValoriApi();
// const isPromise = (valore: unknown): valore is Promise<unknown> => {
//   return typeof valore === 'object' && valore !== null && 'then' in valore;
// }  //type guard (true/false) + controllo che il valore sia un oggetto, che non sia null e che abbia la proprietà then = tutte caratteristiche di una promise.

// if (typeof valore === 'string') {
//   console.log(valore.toUpperCase());
// } else if (typeof valore === 'number') {
//   console.log(valore * 2)
// } else if (typeof valore === 'boolean') {
//   console.log(valore ? 'SI' : 'NO');
// } else if (valore === null) {
//   console.log('Il dato è vuoto');
// } else if (Array.isArray(valore)) {
//   console.log(valore.length);
// } else if (isPromise(valore)) {
//   const risultato = await valore;
//   console.log(risultato);
// } else {
//   console.log('Tipo non supportato');
// }


// Snack 2
type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: 'm' | 'f';
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
}

const dipendente1: Dipendente = {
  nome: 'Giovanni',
  cognome: 'Bianchi',
  annoNascita: 1990,
  sesso: 'm',
  anniDiServizio: [2010, 2011, 2013, 2017],
  emailAziendale: 'giovanni.bianchi@azienda.com',
  contratto: 'indeterminato'
};

console.log(dipendente1);