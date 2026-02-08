'use client';

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

export function CategoryChart({ data }: { data: any[] }) {
    return (
        <div className="h-80 bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold mb-2">Distribución</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={data} dataKey="total" nameKey="categoria" />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
