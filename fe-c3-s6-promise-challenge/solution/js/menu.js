let menuItems = [];
const menuUrl = 'http://localhost:3000/menu';
const displayOnPage=(menu)=>{
    const filterMenu = document.getElementById("filter-menu");
    filterMenu.innerHTML=""
    for(const item  of menu){
        const tableRow = document.createElement("tr");
        const newItemName = document.createElement("td");
        const newPrice = document.createElement("td");
        newItemName.textContent = item.itemName;
        newPrice.textContent = item.price;
        tableRow.appendChild( newItemName );
        tableRow.appendChild( newPrice );
        filterMenu.appendChild( tableRow );
    }
}
function fetchMenuItemsFromServer() {       
    axios.get( menuUrl )
        .then( res=>{
            menuItems=[]
            menuItems = [...res.data]
            displayOnPage(res.data)
            category.value='all'
        } )    
}
//Write code to filter the menu items from list by category
const category = document.getElementById('category');
category.addEventListener('change', function (e) {
    findItemsByCategory(category.value);
});
window.onload = ()=>{
    fetchMenuItemsFromServer()
}
function findItemsByCategory(category) {
    console.log( category );
    if(category === 'all'){
        displayOnPage( menuItems)
        return
    }
    const filteredItems = menuItems.filter( item =>{
        console.log("filtering");
        if(item.category.toLowerCase() === category || (item.category.toLowerCase() ==='main course' && category ==='main-course'))
            return item 
    })
    displayOnPage( filteredItems )
}
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    fetchMenuItemsFromServer,
    displayOnPage
}