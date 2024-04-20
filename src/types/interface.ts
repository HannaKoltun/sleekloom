export interface IFeaturedItems {
    styleFeat: string,
    slyleFeatImage: string,
    styleFeatTwo: string,
    featCostContainer: string,
    cardContainer: string; 
    "id": number,
    "title"?: string,
    "price"?: number,
    "description"?: string,
    "category"?: string,
    "image"?: string,
    "rating"?: any,
    "rate"?: number,
    "count"?: number,
    children?: never[],
}

export interface IButton {
    text: string | number,
    isDisabled: boolean,
    buttonStyle: string
}


export interface IFeatItems {
    "id": number,
    "title"?: string,
    "price"?: number,
    "description"?: string,
    "category"?: string,
    "image"?: string,
    "rating"?: any,
    "rate"?: number,
    "count"?: number,
}

export interface IObj {
    'username': string,
    'email': string,
    'password': string,
}

export interface IInput {
    typeInput: string,
    isDisabled: boolean,
    type: string,
    legend: string,
    id: string
    placeholder: string
    inputValue: string
    setInputValue: (e: any) => void
}