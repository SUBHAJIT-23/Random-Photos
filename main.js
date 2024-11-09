const img = document.querySelector(".image-container");
const bt = document.querySelector(".btn");

bt.addEventListener("click",()=>
{
    n = 10
    addNewimages();
});

function addNewimages()
{
    for (let i = 0; i < n ; i++)
    {
        const nwimg = document.createElement("img");
        nwimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        img.appendChild(nwimg);
    }
}
