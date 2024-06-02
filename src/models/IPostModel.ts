export interface IPostModel {
    userId: number,
    title: string,
    body: string
}

export type IPostModelRequest = IPostModel & {id:number}
