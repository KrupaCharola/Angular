 export interface IFoody {
    name: string;
    taste: string;
    rating: number;
    isCold: boolean;
    date?: number;
    price: number;
    choices?: Array<IChoicesForFood>
}

export interface IChoicesForFood {
    name: string;
    price: number;
}