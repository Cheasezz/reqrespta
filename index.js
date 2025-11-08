import './index.css'

document.querySelector("#app").innerHTML= `
<div id="div">
<h1>Вопросы</h1>
<button id="btn" type="button">qwe</button>
<ul id="questinos"></ul>
</div>
`
const div = document.querySelector("#div")
const ul = document.querySelector("#questinos")
const btn = document.querySelector("#btn");

btn.addEventListener("click",async () => {
  const res = await fetch("https://cloud-api.yandex.net/v1/disk/public/resources?public_key=https%3A%2F%2Fdisk.yandex.ru%2Fd%2FOC4Fb8h47w8Ogw")
  const resjsn= await res.json()

  for (let index = 0; index < resjsn._embedded.items.length; index++) {
    const doc = resjsn._embedded.items[index];
    const name = doc.name
    console.log(name);
    
    let newLi = document.createElement("li");
    let newBtn = document.createElement("a");
    newBtn.textContent=name.substring(0,name.lastIndexOf("."))
    newBtn.href=doc.public_url
    newBtn.target="_blank"

    newLi.append(newBtn)
    ul.append(newLi)
  }
})
