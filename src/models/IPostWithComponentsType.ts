import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type IPostWithComponentsType = IPostModel & {comments: ICommentModel[]}
