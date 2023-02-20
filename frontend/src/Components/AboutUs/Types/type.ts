export type Description = {
    id?: number | undefined;
    body: string;
    img: string;
    userId?: number

};

export type State = {
    descriptions: Description[],
    error: undefined | string;
};

export type DescriptionId = Description['id'];
