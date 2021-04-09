import { get, writable } from "svelte/store";

export const local = writable('en-US');

export function formatCurrency(value: number, currency = 'USD') {
    const formatter = new Intl.NumberFormat(get(local), {
        style: 'currency',
        currency
    });
    const result = formatter.format(value);
    return result.replace(/\.00$/, '');
}

export function formatNumber(value: number) {
    const formatter = new Intl.NumberFormat(get(local));
    const result = formatter.format(value);
    return result.replace(/\.00$/, '');
}
