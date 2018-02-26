const container = document.getElementById('container');

const endpoint = 'https://next.json-generator.com/api/json/get/41LpdraD4';

const request = async () => {
    await fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            let html = '';
            for (let i = 0; i < res.length; i++){
                if ((i % 2) === 0) {
                    html+= `<div class="each even">${res[i].favoriteFruit}</div>`;
                } else {
                    html+= `<div class="each odd">${res[i].favoriteFruit}</div>`;
                }

            }
            container.innerHTML = html;
        })
        .catch(err => container.innerHTML = `<div class="each error">That was an error: <strong>${err}</strong></div>`)
}

request();

