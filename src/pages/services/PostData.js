export function PostData(hash, data) {
  let BaseUrl = "http://sheethub.cluster/";

  return new Promise((resolve, reject) => {
    fetch(BaseUrl + hash, {
      method: "POST",
      body: JSON.stringify(data)
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
