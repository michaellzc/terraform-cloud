import Request from './Request'
import { ConfigurationVersion, ConfigurationVersionRequest } from '../../types'
import axios, { AxiosInstance } from 'axios'

export default class ConfigurationVersions extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  create(workspaceId: string, request?: ConfigurationVersionRequest): Promise<ConfigurationVersion> {
    const path = `/workspaces/${workspaceId}/configuration-versions`
    return this.post<ConfigurationVersion, ConfigurationVersionRequest>(
      path,
      request || { data: { attributes: {}, type: 'configuration-version' } }
    )
  }

  async show(configurationId: string): Promise<ConfigurationVersion> {
    const path = `/configuration-versions/${configurationId}`
    return this.get<ConfigurationVersion>(path)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  async upload(url: string, data: any): Promise<any> {
    return await axios.put(url, data, { maxBodyLength: 500 * 1000000 }) // 500MB
  }
}
