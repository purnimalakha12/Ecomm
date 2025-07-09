class EcommerceStore {
    constructor() {
        this.categories = {};
    }

    createCategory(categoryName) {
        // validation of duplicate category
        if (this.categories[categoryName]) {
            // alert("Category : " + categoryName + " already exists")
            console.log("Category : " + categoryName + " already exists")
        } else {
            this.categories[categoryName] = [];
            console.log("category created: ", this.categories)
        }
        this.updateUI()

        // displaying category in html
        // let olEle = document.getElementById("category")
        // // olEle.innerHTML = "<li>Apple</li>"
        // let categoryNames = Object.keys(this.categories)
        // olEle.innerHTML = categoryNames.map(
        //     (category, index)=>{
        //         // using template literal
        //         return `<li>${category}</li>`
        //     }
        // ).join(" ")
    }

    updateUI() {
        //displaying category in HTML
        let olEle = document.getElementById("category")
        //olEle.innerHTML = <li>Apples</li>
        let categoryName = Object.keys(this.categories)
        olEle.innerHTML = categoryName.map(
            (category, index) => {
                return `<li key=${index}>${category}
                <button id="btn-${category}">Delete</button>
                </li>`
            }
        ).join("")
        this.updateCategoryDropDown(this.categories)
        this.registerClickEventForDeleteCategory(this.categories)
    }

    updateCategoryDropDown(categories) {
        let selectEle = document.getElementById("category-item")
        selectEle.innerHTML = Object.keys(categories).map((category, index) => {
            return `<option value="${categories}">${category}</option>`
        })
    }

    deleteCategory(categoryName) {
        if (this.categories[categoryName]) {
            delete this.categories[categoryName]
            console.log("category deleted: ", this.categories)
            //updating UI
            this.updateUI()
        } else {
            console.log("category not found")
        }
    }

    registerClickEventForDeleteCategory(categories) {
        Object.keys(categories).forEach(
            (category, index) => {
                document.getElementById("btn-" + category).
                    addEventListener(
                        "click",
                        () => {
                            console.log("delete category:", category)
                            this.deleteCategory(category)
                        }

                    )

            }
        )
    }

    addItemInCategory(categoryName,item){
        if(this.categories[categoryName]){
            this.categories[categoryName].push(item)
        }else{
            console.log("category not found")
            alert("category not found")
        }
        console.log("after adding category:",this.categories)
    }
}

const store = new EcommerceStore();
store.createCategory("Electronics")
store.createCategory("Clothing")
store.createCategory("Fruit")
store.createCategory("Vegetable")
store.createCategory("Electronics")
store.deleteCategory("Clothing")
store.deleteCategory("abc")

let categoryInput = document.getElementById("category-name")
let addCategoryBtn = document.getElementById("add-category")
addCategoryBtn.addEventListener(
    "click",
    () => {
        let category = categoryInput.value
        console.log("category from input: ", category)
        if (category === "") {
            alert("Category name is required")
            return;
        }
        store.createCategory(category)
    },
)
//event ;istening
let itemForm = document.getElementById("category-item-form")
itemForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('form submitted')
    let selectCategory = document.getElementById("category-item").value
    let itemName = document.getElementById("item-name").value
    let itemPrice = document.getElementById("item-price").value
    let addItemBtn = document.getElementById("add-item")
    console.log("form value:",selectCategory,itemName,itemPrice)

    let myItem={
        id:Date.now().toLocaleString(),
        name:itemName,
        prie:itemPrice,
        categoryName:selectCategory,
    }
    console.log("myItem:",myItem)
    store.addItemInCategory(selectCategory,myItem)
})