import { UnexpectedError,FailInToSave } from "@/app/domain/errors"
import { AddPost } from "@/app/domain/usecases/add-post"
import {  HttpClient, HttpStatusCode} from '@/app/data/protocols/http'


export class RemoteAddPost implements AddPost {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddPost.Model>
  ){}

  async add(params: RemoteAddPost.Params): Promise<RemoteAddPost.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created: return httpResponse.body as RemoteAddPost.Model
      case HttpStatusCode.badRequest: throw new FailInToSave('Post')
      default: throw new UnexpectedError()
    }
 
  }
}
export namespace RemoteAddPost {
  export type Params = AddPost.Params
  export type Model = AddPost.Model
}