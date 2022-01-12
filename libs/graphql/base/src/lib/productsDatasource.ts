import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

const PRODUCTS_URL = process.env.PRODUCTS_URL || 'http://localhost:3002/';

class ProductsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = PRODUCTS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Content-Type', 'application/json');
  }

  async getProductById(id: string) {
    const data = `
    query{
        fetchProduct(id: "${id}"){ 
            id 
            sku
            pricing {
                retail
                list
            }
        }
    }`;

    const result = await this.post('graphql', JSON.stringify({ query: data }));
    return result;
  }
}

export default ProductsAPI;
