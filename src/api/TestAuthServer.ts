
import {GraphcoolAuthServer} from '../api/GraphcoolAuthServer'
import {AuthServer, TokenValidationResult} from '../types'
import {testToken} from '../utils/constants'

export default class TestAuthServer extends GraphcoolAuthServer implements AuthServer {

  getAuthToken(): Promise<string> {
    return new Promise((resolve, reject) => resolve(testToken))
  }

  async validateAuthToken(token: string): Promise<TokenValidationResult> {
    return super.validateAuthToken(token)
  }
}



