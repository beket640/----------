let searh_input = document.getElementById("search_place")

const product = [
    // Ареометры
    {
        id: 0,
        articul: 21000594,
        category: "Ареометры",
        shop_product: "АУ 1000-1050 (урометр); уп. 1 шт.",
        unit: "шт",
        price: 12896 
    },
    {
        id: 1,
        category: "Бутирометры",
        articul: 12010000,
        shop_product: "для молока 1- 6; уп. 1 шт.",
        unit: "шт",
        price: 11000
    },
    {
        id: 2,
        category: "Банки лабораторные из светлого стекла с делениями и навинчивающейся полипропиленовой крышкой, Китай",
        articul: 10006811,
        shop_product: "50 мл; уп. 160/144 шт.",
        unit: "шт",
        price: 1663
    },
    {
        id: 3,
        category: "Банки лабораторные из темного стекла с делениями и навинчивающейся полипропиленовой крышкой, Китай",
        articul: 10007209,
        shop_product: "50 мл; уп. 120/160 шт.",
        unit: "шт",
        price: 2024
    },
    {
        id: 4,
        category: "Банка для хранения и транспортирования лекарственных средств и реактивов из темного стекла",
        articul: 12002860,
        shop_product: "для реактивов 100 мл, плевательница, Китай; уп. 144 шт.",
        unit: "шт",
        price: 651
    },
    {
        id: 5,
        category: "Боек для ампул",
        articul: 10006102,
        shop_product: "Боек для ампул; уп. 1 шт.",
        unit: "шт",
        price: 1038
    },
    {
        id: 6,
        category: "Бутылки для реактивов с завинчивающейся полипропиленовой крышкой",
        articul: 10001000,
        shop_product: "БВ-1-1000, темное стекло; уп. 8 шт.",
        unit: "шт",
        price: 840
    },
    {
        id: 7,
        category: "Бутылки для крови, трансфузионных и инфузионных препаратов",
        articul: 10006413,
        shop_product: "ll-50-2-МТО; уп. 170 шт.",
        unit: "шт",
        price: 160
    },
    {
        id: 8,
        category: "Склянка-аспиратор с краном и пришлифованной пробкой (бутыль Вульфа)",
        articul: 10006309,
        shop_product: "1000 мл; уп. 6/12 шт.",
        unit: "шт",
        price: 11625
    },
    {
        id: 9,
        category: "Бюретки без крана, с оливой",
        articul: 10000001,
        shop_product: "1-3-2-10-0,05; уп. 3 шт.",
        unit: "шт",
        price: 3624
    },
    {
        id: 10,
        category: "Бюретки с краном (кран с резьбовым уплотнением)",
        articul: 10000023,
        shop_product: "1-2-2-1-0,01 (микробюретка); уп. 1 шт.",
        unit: "шт",
        price: 7665
    },
    {
        id: 11,
        category: "Воронки делительные грушевидные с делениями",
        articul: 10000401,
        shop_product: "ВД-3-125; уп. 2 шт.",
        unit: "шт",
        price: 10930
    },
    {
        id: 12,
        category: "Воронки делительные грушевидные",
        articul: 10000328,
        shop_product: "ВД-3-125; уп. 2/48 шт.",
        unit: "шт",
        price: 7163
    },
    {
        id: 13,
        category: "Воронки делительные цилиндрические с делениями",
        articul: 10000451,
        shop_product: "ВД-1-125; уп. 4 шт.",
        unit: "шт",
        price: 10402
    },
    {
        id: 14,
        category: "Воронки делительные цилиндрические",
        articul: 10000311,
        shop_product: "ВД-1-10; уп. 10 шт.",
        unit: "шт",
        price: 4048
    },
    {
        id: 15,
        category: "Воронки лабораторные",
        articul: 10000515,
        shop_product: "В-25-38 мм; уп. 24/576 шт.",
        unit: "шт",
        price: 906
    },
    {
        id: 16,
        category: "Дозаторы стеклянные",
        articul: 10000605,
        shop_product: "для изоамилового спирта 1-19/26; уп. 1 шт.",
        unit: "шт",
        price: 28440
    },
    {
        id: 17,
        category: "Емкости стеклянные для окраски препаратов",
        articul: 12001403,
        shop_product: "77х57х29 мм (на 10 стекол горизонтально); уп. 1/50 шт.",
        unit: "шт",
        price: 5227
    },
    {
        id: 18,
        category: "Изгибы",
        articul: 12010303,
        shop_product: "И 75°2К-14/23-14/23; уп. 10 шт.",
        unit: "шт",
        price: 6952
    },
    {
        id: 19,
        category: "Камеры Горяева (для счета форменных элементов крови)",
        articul: 12001711,
        shop_product: "2-х сеточная, исполнение 3; уп. инд/10/300 шт.",
        unit: "шт",
        price: 6292
    },
    {
        id: 20,
        category: "Камера Фукса-Розенталя",
        articul: 12007401,
        shop_product: "Счетная камера с сеткой Фукса-Розенталя; уп. инд/10/500 шт.",
        unit: "шт",
        price: 5720
    },
    {
        id: 21,
        category: "Капельницы",
        articul: 12001810,
        shop_product: "Страшейна, 2-30 мл, светлая; уп. 16/288 шт.",
        unit: "шт",
        price: 1558
    },
    {
        id: 22,
        category: "Капилляры",
        articul: 12001911,
        shop_product: "75 мм; уп. 50/5000 шт.",
        unit: "шт",
        price: 7
    },
    {
        id: 23,
        category: "Каплеуловители",
        articul: 12007508,
        shop_product: "КО-60; уп. 11 шт.",
        unit: "шт",
        price: 8642
    },
    {
        id: 24,
        category: "Колбы Бунзена (с тубусом)",
        articul: 10006030,
        shop_product: "1-125; уп. 12/72 шт.",
        unit: "шт",
        price: 3890
    },
    {
        id: 25,
        category: "Колбы Бунзена (с тубусом) со шлифом",
        articul: 10006023,
        shop_product: "2-100-19/26; уп. 12 шт.",
        unit: "шт",
        price: 3670
    },
    {
        id: 26,
        category: "Колбы лабораторные (Къельдаля: исполнение 2 - с цилиндрической горловиной)",
        articul: 10006608,
        shop_product: "2-100-22; уп. 2/96 шт.",
        unit: "шт",
        price: 2543
    },
    {
        id: 27,
        category: "Колбы лабораторные (Къельдаля: исполнение 1 - со шлифом)",
        articul: 10006614,
        shop_product: "1-50-14/23; уп. 2/120 шт.",
        unit: "шт",
        price: 3872
    },
    {
        id: 28,
        category: "Колбы лабораторные (Энглера, тип КРН)",
        articul: 10006100,
        shop_product: "КРН-125; уп. 2/32 шт.",
        unit: "шт",
        price: 7700
    },
    {
        id: 29,
        category: "Колбы лабораторные (конические: исполнение 2 - с цилиндрической горловиной, тип Кн)",
        articul: 10000839,
        shop_product: "КН-2-25-22 без делений; уп. 24 шт.",
        unit: "шт",
        price: 1065  
    },
    {
        id: 30,
        category: "Колбы лабораторные (конические: исполнение 1 - со шлифом, тип Кн)",
        articul: 10000821,
        shop_product: "КН-1-25-14/23, без делений; уп. 24/576 шт.",
        unit: "шт",
        price: 3062
    },
    {
        id: 31,
        category: "Колбы лабораторные (круглодонные: исполнение 2 - с цилиндрической горловиной, тип К)",
        articul: 10000906,
        shop_product: "К-2-50-22; уп. 12/192 шт.",
        unit: "шт",
        price: 1610
    },
    {
        id: 32,
        category: "Колбы лабораторные (круглодонные: исполнение 1 - со шлифом, тип К)",
        articul: 10000910,
        shop_product: "К-1-50-29/32; уп. 12/192 шт.",
        unit: "шт",
        price: 3810        
    },
    {
        id: 33,
        category: "Колбы лабораторные (круглодонные: исполнение 1 - со шлифом и двумя горловинами, тип КГУ-2)",
        articul: 10000921,
        shop_product: "КГУ-2-1-100-19/26-14/23; уп. 12 шт.",
        unit: "шт",
        price: 8105
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
]
const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('search_place').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.category.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

        const displayItem = (items) => {
            document.getElementById('price-list').innerHTML = items.map((item) => {
                var {category, articul, shop_product, unit, price } = item;
                return (
                    `<div class='product-cards'>
                        <div class='articuls'>
                            <p>${articul}</p>
                        </div>
                        <div class='product-category'>
                            <p>${category}</p>
                        </div>
                        <div class='product-items'>
                            <p>${shop_product}</p>
                        </div>
                        <div class='product-units'>
                            <p>${unit}</p>
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