const valore: unknown = await prendiValoriApi();
const isPromise = (valore: unknown): valore is Promise<unknown> => {
  return typeof valore === 'object' && valore !== null && 'then' in valore;
}  //type guard (true/false) + controllo che il valore sia un oggetto, che non sia null e che abbia la proprietà then = tutte caratteristiche di una promise.

if (typeof valore === 'string') {
  console.log(valore.toUpperCase());
} else if (typeof valore === 'number') {
  console.log(valore * 2)
} else if (typeof valore === 'boolean') {
  console.log(valore ? 'SI' : 'NO');
} else if (valore === null) {
  console.log('Il dato è vuoto');
} else if (Array.isArray(valore)) {
  console.log(valore.length);
} else if (isPromise(valore)) {
  const risultato = await valore;
  console.log(risultato);
} else {
  console.log('Tipo non supportato');
}
