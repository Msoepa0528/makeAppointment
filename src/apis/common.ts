import type * as Types from "@/apis/type"
import { request } from "@/http/axios"
import Qs from "qs"
export function getCountryListApi() {
  return request<Types.countryResponseData>({
    url: "/region/country/list",
    method: "post",
  })
}