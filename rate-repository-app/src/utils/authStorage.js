import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:accessTokens`,
    );
    return accessToken ? JSON.parse(accessToken) : [];
  }

  async setAccessToken(accessToken) {
      const currentTokens = await this.getAccessToken();
      const newToken = [...currentTokens, accessToken];
      console.log("at authStorage setAccessToken", accessToken);

      await AsyncStorage.setItem(
          `${this.namespace}:accessTokens`,
          JSON.stringify(newToken),
      );
  }

  async removeAccessToken() {
      await AsyncStorage.removeItem(`${this.namespace}:accessTokens`);
  }
}

export default AuthStorage;
