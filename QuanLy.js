// mang chua danh sach san pham
let product = ["sony", "samsung", "nokia", "xiaomi", "fujitsu", "apple"];
displayProduct();

// ham hien thi danh sach san phan
function displayProduct() {
    let str = "<table border='1 solid white'> ";
    for (let i = 0; i < product.length; i++) {
        str += "<tr onclick='checkIndex("+ i +")'> <td  style='width: 300px'>" + product[i] + "</td>"
            + "<td ><button onclick='updateProductToList(" + i + ")'>Edit</button></td> " +
            "<td><button onclick='deleteProductFromList(" + i + ")'>Delete</button></td> </tr>"
    }
    str += "</table>"
    document.getElementById("listProdcut").innerHTML = str
}

// ham them san pham vao danh sach
function insertProductToList(index) {
    let newItem = document.getElementById("addId").value;
    product[product.length] = newItem;
    displayProduct();
}
// ham sua ten san pham
function updateProductToList(index) {
    let updateItem = document.getElementById("addId").value;
    product[index] = updateItem;
    displayProduct();
}

//ham xoa ten san pham
function deleteProductFromList(index) {
    for(let i=index; i<product.length-1; i++){
        product[i] = product[i+1];
    }
    product.length--;
    displayProduct();
}
// ham kiem tra index cua phan tu
function checkIndex(index){
    document.getElementById("addId").value = product[index];
}


