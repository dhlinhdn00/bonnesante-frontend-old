import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { easingEffects } from 'chart.js/helpers';

const InferenceGraph = ({ startPoint, length, inference }) => {

    const data = {
        labels: Array.from({ length: length }, (_, i) => i + startPoint),
        datasets: [
            {
                data: inference.slice(startPoint, startPoint + length),
                borderColor: '#e71e50',
                borderWidth: 3,
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.5,
                pointStyle: false,
            },
        ],
    };

    let easing = easingEffects.easeOutQuad;
    const totalDuration = 1000;
    const duration = (ctx) => easing(ctx.index / inference.length) * totalDuration / inference.length;
    const delay = (ctx) => easing(ctx.index / inference.length) * totalDuration;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: duration,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return delay(ctx);
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: duration,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return delay(ctx);
            }
        }
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: animation,
        interaction: {
            intersect: false
        },
        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'ECG Inference',
            }
        },
        scales: {
            x: {
                type: 'linear'
            }
        },
    };

    const config = {
        type: 'line',
        data: data,
        options: options
    };

    return <Line {...config} />;
};
export default InferenceGraph;