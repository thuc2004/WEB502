enum Rate {
    Thap = 'Thap',
    TrungBinh = 'Trung binh',
    Cao = 'Cao'
};

type Product = {name:string,price:number,sale:boolean,rate:Rate,description?:string};


let listProducts: Array<{name:string,price:number,sale:boolean,rate:Rate}> = [
    { name: "Laptop", price: 10, sale: true, rate: Rate.Thap },
    { name: "Phone", price: 5, sale: false, rate: Rate.Thap },
    { name: "Tablet", price: 3, sale: true, rate: Rate.Thap },
    { name: "Monitor", price: 2, sale: false, rate: Rate.Cao },
    { name: "Headphones", price: 1, sale: true, rate: Rate.TrungBinh }
];

console.log("List San Pham:", listProducts);


function addProduct(product: Product){
    listProducts = listProducts.map(p => ({
        ...p,
        description : p.price >5 ? 'Tot' : 'Binh Thuong',
    }))
    
    const newPrd = {
        ...product,
        description : product.price >5 ? 'Tot' : 'Binh Thuong',
    }
    listProducts.push(newPrd);
}


function showProducts (){
    listProducts.forEach(prd => {
        console.log(`Name: ${prd.name}, Price: ${prd.price}, Sale: ${prd.sale}, Rate: ${prd.rate}`);
    }  );
}

function totalPrice (): number {
    return listProducts.reduce((total, prd) => total + prd.price, 0);
}

function filterProductsByRate(): Product[] {
    return listProducts.filter(prd => prd.rate && (prd.rate === Rate.TrungBinh || prd.rate === Rate.Cao));
}

addProduct({ name: "Sản phẩm F", price: 12, sale: true, rate: Rate.TrungBinh });
console.log("Danh sách sản phẩm:"); 
showProducts(); 
console.log("Tổng giá bán:", totalPrice());
console.log("Sản phẩm đang Sale và đánh giá từ Trung bình trở lên:");
console.log(filterProductsByRate());