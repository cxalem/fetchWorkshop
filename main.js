const apiUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

const formatPrice = price => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
}

//Connect to server
window
    .fetch(`${apiUrl}/api/avo`)
    //We process the answer en turn it into a .json
    .then(response => response.json())
    //json -> Data -> Rendering info browser
    .then(info => {
      let items = [];
      info.data.forEach(item => {

        const img = document.createElement('img');
        img.src = `${apiUrl}${item.image}`;
        img.classList.add('image');

        const  title = document.createElement('h2');
        title.textContent = item.name;
        title.classList.add('title');

        const price = document.createElement('p');
        price.textContent = formatPrice(item.price);
        price.classList.add('price');

        const infoContainer = document.createElement('div');
        infoContainer.append(title, price);
        infoContainer.classList.add('infoContainer');

        const itemContainer = document.createElement('div');
        itemContainer.append(img);
        itemContainer.classList.add('itemContainer');
        itemContainer.append(infoContainer);
        items.push(itemContainer);

      })
      appNode.append(...items);
    })


