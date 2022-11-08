import { FailInLoadError,UnexpectedError } from "@/app/domain/errors";
import { LoadPosts } from "@/app/domain/usecases/load-post-list";
import {HttpStatusCode,HttpClient}  from '@/app/data/protocols/http'



export class RemoteLoadPosts implements LoadPosts {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadPosts.Model>,
  ){}

  async load(): Promise<RemoteLoadPosts.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body as RemoteLoadPosts.Model
      case HttpStatusCode.badRequest: throw new FailInLoadError('Posts')
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadPosts {
  export type Model = LoadPosts.Model
}