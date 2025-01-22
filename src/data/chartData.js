import { cssVar, getRandom } from "../util/helper";

const purple = cssVar('--purple');
const yellow = cssVar('--yellow');

export const pieChartData = {
    labels: [
        "Zarqxans",
        "Luminoids",
        "Vexillians",
        "Gravitons",
        "Nebulites",
        "Chromarians"
    ],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                yellow,
                'rgba(75, 192, 192, 0.2)',
                purple,
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const polarAreaData = {
    labels: ['Highest', 'High', 'Medium', 'Low', 'Lowest', 'None'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                yellow,
                'rgba(75, 192, 192, 0.5)',
                purple,
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barChartData = {
    labels,
    datasets: [
        {
            label: 'Souls',
            data: labels.map(() => getRandom(0, 1000)),
            backgroundColor: purple,
        },
        {
            label: 'Gold',
            data: labels.map(() => getRandom(0, 1000)),
            backgroundColor: yellow,
        },
    ],
};

export const lineDataSets = [
    {
        label: 'Won',
        data: labels.map(() => getRandom(-1000, 10000)),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: yellow,
    },
    {
        label: 'Lost',
        data: labels.map(() => getRandom(-1000, 10000)),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: purple,
    },
]