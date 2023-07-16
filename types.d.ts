export interface ITime {
    hours: number;
    minutes: number;
}

export interface IToday {
    date: Date;
    fields: { key: string; value: ITime | number }[];
    comment: string;
    image: string | null;
}
