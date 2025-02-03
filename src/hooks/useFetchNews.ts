import { fetchData } from "@/utils/FetchData";

export const fetchGeneralNews = async () => {
    return await fetchData(`/top-headlines?country=us`);
};

export const fetchCategoryNews = async (category: string) => {
    return await fetchData(`/top-headlines?category=${category}`);
};

export const fetchSearchNews = async (query: string) => {
    return await fetchData(`/everything?q=${query}`);
};

export const fetchSortedNews = async (query: string, sortBy: "publishedAt" | "popularity" | "relevancy") => {
    return await fetchData(`/everything?q=${query}&sortBy=${sortBy}`);
};

export const fetchDateRangeNews = async (query: string, from: string, to: string) => {
    return await fetchData(`/everything?q=${query}&from=${from}&to=${to}`);
};
