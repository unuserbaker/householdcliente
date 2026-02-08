const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher<t>(url: string): Promise<t> {
  const res = await fetch(`${API_URL}${url}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Error api`);
  }

  return res.json();
}

export async function post<T>(url: string, body: any): Promise<T> {
  const res = await fetch(`${API_URL}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Error al guardar");
  }

  return res.json();
}
