export interface ICourse {
    id: string;
    name: string;
    creationDate: Date;
    length: number;
    description: string;
    isTopRated?: boolean;
}
