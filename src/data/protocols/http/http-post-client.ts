import { HttpResponse } from "./http-response";

export type HttpPostParams = {
  url: string
  body?: Record<string, any>
}


export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>
}
