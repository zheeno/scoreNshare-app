export function GetData(hash) {
  let BaseUrl = "http://sheethub.cluster/";

  return new Promise((resolve, reject) => {
    fetch(BaseUrl + hash, {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJSON => {
        // return responseJSON.data;
        resolve(responseJSON);
      })
      .catch(error => {
        // console.log(error)
        reject(error);
      });
  });
}
