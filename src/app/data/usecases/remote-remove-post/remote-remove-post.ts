import { FailInLoadError,UnexpectedError } from "@/app/domain/errors";
import { LoadPosts } from "@/app/domain/usecases/load-post-list";
import {HttpStatusCode,HttpClient}  from '@/app/data/protocols/http'
import { RemovePost } from "@/app/domain/usecases/remove-post";



export class RemoteRemovePosts implements RemovePost {
  constructor(
    private readonly id: string,
    private readonly url: string,
    private readonly httpClient: HttpClient<RemovePost.Model>,
  ){}

  async remove(): Promise<RemovePost.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'delete',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body as RemovePost.Model
      case HttpStatusCode.badRequest: throw new FailInLoadError('Posts')
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteRemovePosts {
  export type Model = RemovePost.Model
}