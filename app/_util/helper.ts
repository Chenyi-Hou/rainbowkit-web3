export function formatNumber(num: number): string {
  if (num >= 10000) {
    return `${(num / 1000).toFixed(0)}K ETH`;
  } else {
    return num.toString() + ' ETH';
  }
}