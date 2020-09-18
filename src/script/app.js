var foods = [{
        name: "Rendang Paha Ayam Organik",
        urlPages: "pages/rendang-paha-ayam-organik.html",
        img: "src/img/rendang.jpg",
        description: "<p> Bahan - bahan: <br/> <ul> <li>4 paha ayam organik </li> <li>2 buah kentang potong <li> potong </li> <li>2 butir telur rebus <br > <li>1 lembar daun kunyit iris </li> <li>4 lembar daun jeruk </li> <li>2 lembar daun salam </li> <li>1 bungkus kerisik(kelapa parut kering) </li> <li>200 ml santan + air </li> <li>Garam, perasan dan gula malaka </ul> </p> <p> Bahan halus: <ul> <li>8 butir bawang merah </li> <li>3 butir bawang putih </li> <li>1 cm kunyit </li> <li>1 cm jahe </li> <li>1 cm lengkuas </li> <li>2 batang serai </li> <li>3 buah cabai rawit </li> <li>3 buah cabai merah </p><br/>  <p> Cara membuat: <br/>  <li>Goreng kentang sisihkan. </li> <li>Panaskan minyak tumis bahan halus sampai kering dan pecah minyak. </li> <li>Masukkan ayam tumis sebentar kemudian masukkan santan dengan air aduk rata. </li> <li>Masukkan kerisik,daun jeruk,daun salam, dan daun kunyit. </li> <li>Kemudian masukkan kentang dan telur rebus tambahkan garam, gula malaka dan perasa. </li> <li>Masak dengan api kecil sampai air kering,jika ingin berkuah jangan masak sampai kering. </ul> </p>"

    },
    {
        name: "Gulai Ayam",
        urlPages: "pages/gulai-ayam.html",
        img: "src/img/gulai-ayam.jpg",
        description: "<p>Bahan-bahan:<br/>- 1/2 ekor ayam<br/>- 1 buah jeruk nipis <br/>- 1 batang serai geprek<br/>- 2 lembar daun salam<br/>- 2 lembar daun jeruk<br/>- 200 ml santan encer<br/>- 200 ml santan kental <br/>- air matang secukupnya<br/>- secukupnya garam dan kaldu bubuk.</p> <p> Bumbu halus: <br/> -6 siung bawang merah <br/> -3 siung Bawang Putih <br/> -3 butir kemiri sangrai <br/> -4 cm lengkuas muda <br/> -3 cm kunyit <br/> -3 cm jahe <br/> -1 sdm ketumbar <br/> -1 sdt lada bubuk <br/> -5 buah cabai rawit <br/> -10 cabai merah keriting </p><p > Cara membuat: <br/> -Cuci bersih daging ayam dan lumuri dengan jeruk nipis diamkan kurang lebih 10 menit <br/> -Tumis bumbu halus sampai wangi, masukkan daun salam, daun jeruk, dan sereh, aduk sampai bumbu matang, masukkan ayam, aduk rata, masak sampai berubah warna, tambahkan garam dan kaldu <br/> -Masukkan santan encer dan air, masak dengan api sedang sampai daging ayam empuk <br/> -Setelah kuah menyusut dan daging ayam empuk, masukkan santan kental, masak sambil terus diaduk sampai santan mendidih dan bumbu meresap. </p>"
    },
    {
        name: "Tumis jamur tiram",
        urlPages: "pages/tumis-jamur.html",
        img: "src/img/tumis-jarum-tiram.jpg",
        description: "<p>Bahan-bahan:<br/>- 2 bungkus jamur tiram<br/>- 1/2 papan tempe<br/>- 4 siung bawang merah <br/>- 3 siung bawang putih<br/>- 5 buah cabai hijau<br/>- saus tiram<br/>- kaldu jamur<br/>- garam dan gula</p><p > Cara membuat: <br/> -Cuci bersih jamur, siangi, sisihkan. <br/> -Goreng tempe setengah kering.Sisihkan. <br/> -Tumis dua bawang dan cabai sampai harum, masukkan jamur, aduk rata, tambahkan saus tiram, kaldu jamur, gula dan garam.Aduk rata. <br/> -Masukkan tempe, beri sedikit air, masak sampai bumbu meresap.Angkat dan sajikan. </p>",
    },
    {
        name: "Capcay goreng",
        urlPages: "pages/capcay-goreng.html",
        img: "src/img/Capcay_goreng.jpg",
        description: "<p>Bahan:<br/>- 10 udang<br/>- 1 wortel besar<br/>- 1 brokoli kecil<br/>- 1/2 kembang kol<br/>- Sedikit Jamur kuping<br/>- Sedikit Kapri<br/>- Sedikit jagung muda</p><p > Bumbu: <br/> -3 bawang putih, cincang <br/> -1 cm jahe, cincang <br/> -2 sdm saos tiram <br/> -1 sdm kecap asin <br/> -1 / 2 sdm kecap ikan <br/> -1 sdm kecap inggris <br/> -1 sdm maizena(dilarutkan dengan 3 sdm air) <br/> -garam <br/> -air secukupnya </p> <p > Cara membuat: <br/> -Cuci sayur dan potong - potong <br/> -Tumis bawang putih sampai wangi, masukkan jahe cincang dan udang sampai berubah warna <br/> -Masukkan wortel dan air secukupnya, lalu semua bumbu lainnya, cek rasa <br/> -Masukkan semua sayuran lainnya kecuali brokoli.Jangan masak terlalu lama, kira - kira sayur sudah setengah matang. <br/> -Terakhir masukkan brokoli aduk sebentar lalu larutan maizena.Aduk sampai air berubah agak kental, matikan api. </p> ",
    }
];

function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchfood = function (keyword) {
    var filteredfoods = foods.filter(function (food) {
        return food.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredfoods.length) {
        this.onSuccess(filteredfoods);
    } else {
        this.onFailed(keyword + " is not found");
    }
};

var main = function () {
    var searchElement = document.querySelector("#searchElement");
    var buttonSearchElement = document.querySelector("#searchButtonElement");
    var foodListElement = document.querySelector("#foodList");

    var onButtonSearchClicked = function () {
        var dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchfood(searchElement.value);
    };

    var renderResult = function (results) {
        foodListElement.innerHTML = "";
        results.forEach(function (food) {
            var name = food.name;
            var img = food.img;
            var description = food.description;
            var urlPages = food.urlPages;

            var foodElement = document.createElement("div");
            foodElement.setAttribute("class", "food");

            foodElement.innerHTML = '<a href="' + urlPages + '"style="text-decoration:none; color: cornflowerblue"> <img class="fan-art-food" src="' + img + '" alt="' + name + '">\n' +
                '<div class="food-info">\n' +
                ' <h2>' + name + '</h2></a>\n' +
                '</div>';
            foodListElement.appendChild(foodElement);
        })
    };

    var fallbackResult = function (message) {
        foodListElement.innerHTML = "";
        foodListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

document.addEventListener("DOMContentLoaded", main);