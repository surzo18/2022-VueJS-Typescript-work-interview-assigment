export enum Category {
    "Lifestyle",
    "Travel",
    "Music",
    "Politics",
    "Fun",
    "Other"
}

export interface Article {
    id: number,
    title: string,
    category: Category,
    text: string,
    coverImage: string
}