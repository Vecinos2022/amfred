export function sinDiacriticos(texto: string) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
