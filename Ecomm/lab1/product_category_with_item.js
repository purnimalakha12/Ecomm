class EcommerceStore{
    constructor(){
        this.categories={};
    }

    createCategory(categoryName){
        //validation of duplicate categories
        if(this.categories[categoryName]){
            console.log("Category:"+ categoryName +"already exists")//or alert
            return
        }
        this.categories[categoryName]=[];
        console.log("category created:",this.categories)

        //displaying category in html
        let olEle=document.getElementById("category")
        //olEle.innerHTML="<li>Apple</li>"
        let categoryNames =Object.keys(this.categories)
        olEle.innerHTML=categoryNames.map(
            (category,index)=>{
                //uding template literal
                return`<li>${category}</li>`}
        ).join("")
        }

    deleteCategory(categoryName){
        if (this.categories[categoryName]){
            delete this.categories[categoryName]
            console.log("category deleted:", this.categories)
        }else{
            console.log("category not found")
        }
    }
}

const store=new EcommerceStore();
store.createCategory("Electronics")
store.createCategory("Clothing")
store.createCategory("Clothing")
store.createCategory("Fruits")
store.createCategory("Vegetable")
store.createCategory("abcd")
store.createCategory("Electronics")
store.createCategory("Clothing")

let categoryInput=document.getElementById("category-name")
let addCategoryBtn=document.getElementById("add-category")
addCategoryBtn.addEventListener("click",
    ()=>{
        let category=categoryInput.value
        console.log("category from input:",category)
        if(category===""){
            alert("Category name is required")
            return;
        }
         store.createCategory(category)
    },
)