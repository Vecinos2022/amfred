interface FormatProps {
  amount: number
}

/**
 * Formatea un monto numérico como moneda en MXN (pesos mexicanos).
 *
 * @param amount El monto numérico a formatear como moneda.
 * @returns El monto formateado como moneda en pesos mexicanos.
 */

export const currencyFormat = (amount: number = 0): string => {
  const amountFormat = parseFloat(amount.toString().replace(/,/g, ''))

  const formatMXN = amountFormat.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return formatMXN
}
