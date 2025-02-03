import { NewsTypes } from "@/types/NewsTypes";

export const fetchData = async (endpoint: string): Promise<NewsTypes[]> => {
    const API_KEY = process.env.API_KEY;
    if (!API_KEY) {
        throw new Error("API_KEY no está definida en las variables de entorno");
    }

    try {
        const res = await fetch(`https://newsapi.org/v2${endpoint}&apiKey=${API_KEY}`, {
            next: { revalidate: 3600 }, // ✅ Cache por 1 hora
        });

        if (!res.ok) {
            const errorData: { message?: string } = await res.json();
            throw new Error(errorData.message || "Error al obtener datos");
        }

        const data: { articles: NewsTypes[] } = await res.json();
        return data.articles;
    } catch (error) {
        console.error("Error en fetchData:", error);
        return [];
    }
};
