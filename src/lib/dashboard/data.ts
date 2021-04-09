import { formatCurrency } from "$lib/helpers/format";
import { writable } from "svelte/store";

interface Budget {
    value: string,
    change: number,
    changeType: 'down' | 'up'
}

export const budget = writable<Budget>({
    value: formatCurrency(24000),
    change: 12,
    changeType: 'down'
});


export const customers = writable<Budget>({
    value: formatCurrency(1600),
    change: 12,
    changeType: 'up'
});

export const progress = writable({
    value: 75.5
});

export const profit = writable({
    value: formatCurrency(23200)
});

export const latestSales = writable({
    datasets: [
        {
            backgroundColor: "#3f51b5",
            data: [18, 5, 19, 27, 29, 19, 20],
            label: 'This year'
        },
        {
            backgroundColor: '#dadada',
            data: [11, 20, 12, 29, 30, 25, 13],
            label: 'Last year'
        }
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
})

export const trafficByDevice = writable({
    data: {
        datasets: [
            {
                data: [63, 15, 22],
                backgroundColor: ['#3f51b5', '#e53935', '#fb8c00'],
                borderWidth: 8,
                borderColor: '#ffffff',
                hoverBorderColor: '#ffffff'
            }
        ],
        labels: ['Desktop', 'Tablet', 'Mobile']
    },
    devices: [
        {
            title: 'app.dashboard.desktop',
            value: 63,
            icon: 'laptop_mac',
            color: '#3f51b5'
        },
        {
            title: 'app.dashboard.tablet',
            value: 15,
            icon: 'tablet_mac',
            color: '#e53935'
        },
        {
            title: 'app.dashboard.mobile',
            value: 23,
            icon: 'phone_iphone',
            color: '#fb8c00'
        }
    ]
});

export const latestProducts = writable([
    {
        logo: '/images/products/product_1.png',
        name: "Dropbox",
        updated: '2 hours'
    },
    {
        logo: '/images/products/product_2.png',
        name: "Medium Corporation",
        updated: '2 hours'
    },
    {
        logo: '/images/products/product_3.png',
        name: "Slack",
        updated: '3 hours'
    },
    {
        logo: '/images/products/product_4.png',
        name: "Lyft",
        updated: '5 hours'
    },
    {
        logo: '/images/products/product_5.png',
        name: "GitHub",
        updated: '9 hours'
    },
]);

export const latestOrders = writable([
    {
        orderRef: "CDD1049",
        customer: "Ekaterina Tankova",
        date: '12/04/2019',
        status: 'pending'
    },
    {
        orderRef: "CDD1048",
        customer: "Cao Yu",
        date: '12/04/2019',
        status: 'delivered'
    },
    {
        orderRef: "CDD1047",
        customer: "Alexa Richardson",
        date: '11/04/2019',
        status: 'refunded'
    },
    {
        orderRef: "CDD1046",
        customer: "Anje Keizer",
        date: '09/04/2019',
        status: 'pending'
    },
    {
        orderRef: "CDD1045",
        customer: "Clarke Gillebert",
        date: '08/04/2019',
        status: 'delivered'
    },
    {
        orderRef: "CDD1044",
        customer: "Adam Denisov",
        date: '08/04/2019',
        status: 'delivered'
    },
]);