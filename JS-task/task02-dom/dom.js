function changeOuterLinks() {
   const itemList = document.querySelectorAll('nav#link-list a');
    itemList.forEach( item => {
        if (item.innerHTML.includes('outer-link')) {
            item.setAttribute('target', '_blank');
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })
    document.querySelectorAll("nav").forEach((elem) => {
        elem.style.display = "flex";
        elem.style.flexDirection = "column";
        elem.style.margin = "0px auto";
        elem.style.width = "30%";
        elem.style.border = "1px solid blue";
        elem.style.padding = "16px";
      });
}

changeOuterLinks();

export { changeOuterLinks };