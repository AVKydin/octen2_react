export interface IPostModel {
    userId: number,
    title: string,
    body: string
}

export type IPostModelResponse = IPostModel & {id:number}
