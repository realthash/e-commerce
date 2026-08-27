export function formatCurrency(product) {
    return (Math.round(product.priceCents) / 100).toFixed(2)
}