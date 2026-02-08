export function SummaryCard({
    title,
    value,
}: {
    title: string;
    value: number;
}) {
    return (
        <div className="rounded-xl shadow p-4 bg-white">
            <p className="text-gray-500">{title}</p>
            <p className="text-2xl font-bold">
                ${Number(value).toLocaleString()}
            </p>
        </div>
    );
}
