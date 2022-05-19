import notebooksDataReducer from "./notebookData-reducer";

let store = {
    _state: {
        notebook_Data: {
            notebook_Asus_Data: [
                { id: 1, name: 'Ноутбук Asus X409FA i3 10110U / 8ГБ / 1000HDD / 14 / Win10 / (X409FA-BV634T)', price: '249 990 ₸', img: "https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/a/f/afa67d9a20d0632cb2c6c2ea191166e14e45c020_249088_1.jpg" },
                { id: 2, name: 'Ноутбук Asus VivoBook X413EA i3 1115G4 / 4ГБ / 256SSD / 14 / Win10 (X413EA-EK1040T)', price: '254 990 ₸', img: "https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/8/d/8ddbb7576ee4763233f2274e2aaa4ae360da2d36_251232_3.jpg" },
                { id: 3, name: 'Ноутбук Asus E510MA N5030 / 8ГБ / 256SSD / 15.6 / Win10 / (E510MA-EJ599T)', price: '229 990 ₸', img: "https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/3/f3faaf1014f3ca85dba403368a98a727e06d1b62_250567_1.jpg" },
            ],
            notebook_Lenovo_Data: [
                { id: 1, name: 'Ноутбук Lenovo V14 Athlon Gold 3150U / 8ГБ / 128SSD / 14 / Win10 / (82C6S03900)', price: '189 990 ₸', img: "https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/9/1/917c7f0d8e4b6ce9b7a1e9145e3768f98369acc9_231330_8.jpg" },
                { id: 2, name: 'Ноутбук Lenovo IdeaPad 3 i3 1005G1 / 8ГБ / 1000HDD / 15.6 / Win10 / (81WE014SRK)', price: '239 990 ₸', img: "https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/7/271257ea3c1ee754453bcc1a95ee92bfe0172a99_233520_1.jpg" },
                { id: 3, name: 'Игровой ноутбук Lenovo Legion 7 i9 10980HK / 32ГБ / 2000SSD / RTX2080 8ГБ / 15.6 / Win10 / (81YT007MRU)', price: '1 599 990 ₸', img: "https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/c/4/c4bf2a07647a3b15a9bdf19301493ec410c08f14_229763_1a.jpg" },
                // { id: 3, name: '', price: '', img: "" }
            ],
        },
        tv_Data: {},
        cart: [],
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        notebooksDataReducer(this._state.notebook_Data, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;