let searh_input = document.getElementById("search_place")

const product = [
    {
        id: 0,
        articul: 21000594,
        shop_product: "АУ 1000-1050 (урометр); уп. 1 шт.",
        price: 12896 
    },
    {
        id: 1,
        articul: 21000503,
        shop_product: "АМ 1020-1040 (для молока); уп. 1 шт.",
        price: 13280
    },
    {
        id: 2,
        articul: 21000504,
        shop_product: "АМТ 1015-1040 (для молока, с термометром); уп. 1 шт. ",
        price: 26320
    },
    {
        id: 3,
        articul: 21000524,
        shop_product: "Ареометр д/нефти АНТ-2 670-750 (без поверки); уп. 1 шт.",
        price: 7920
    }
]

const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('search_place').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.shop_product.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

        const displayItem = (items) => {
            document.getElementById('price-list').innerHTML = items.map((item) => {
                var { articul, shop_product, price } = item;
                return (
                    `<div class='product-cards'>
                        <div class='articuls'>
                            <p>${articul}</p>
                        </div> 
                        <div class='product-items'>
                            <p>${shop_product}</p>
                        </div>
                        <div class='product-prices'>
                            <p>${price}</p>
                        </div>
                    </div>`
                )
            }).join('')
        };
        displayItem(product);

        function clearPlace(){
            searh_input.value = ""
        }