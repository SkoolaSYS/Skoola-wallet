import { environment } from "./environments/environment";

export class Utility {

  /*
   * This is a workaround to enable images from cbs server to be displayed on pwa client.
   * The issue is images returned from cbs server have their url's server set to client's IP
   * which by right, it should be set to the server's IP.
   * TODO: Explore better and cleaner way to achieve this. (rwa) 
   */
  static rebaseImageUrl(url: string): string {
    let newUrl: string = "";

    if (url) {
      const imageId: string = url.split("=")[1];
      newUrl = environment.proxyTarget + "/thumbnail?id=" + imageId;  
    }
    
    return newUrl;
  }
}