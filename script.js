// Variabel untuk menyimpan operasi terakhir yang dipilih pengguna
var lastOperation = "";

// Fungsi untuk mengatur operasi terakhir
function setLastOperation(operation) {
    lastOperation = operation;
}

// Fungsi untuk memformat angka dengan tanda titik untuk ribuan, puluhan ribu, ratusan ribu, dan jutaan
function formatNumberWithDot(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fungsi ini menambahkan angka ke layar hanya jika operasi telah dipilih
function display(value) {
    var result = document.getElementById("result");
    result.value += value;
}

// Fungsi untuk menghapus layar
function clearScreen() {
    var result = document.getElementById("result");
    result.value = "";
    lastOperation = ""; // Hapus operasi terakhir
}

// Fungsi untuk menghitung hasil
function calculate() {
    var result = document.getElementById("result");
    var p = result.value.trim(); // Menghapus spasi di awal dan akhir input
    if (p !== "") {
        var q = eval(p);
        if (!isNaN(q)) { // Memeriksa apakah hasil evaluasi adalah angka valid
            result.value = formatNumberWithDot(q); // Memformat hasil dengan tanda titik
        } else {
            alert("Invalid input."); // Menampilkan pesan jika input tidak valid
        }
    } else {
        alert("Please enter a valid expression."); // Menampilkan pesan jika tidak ada input
    }
}

// Fungsi untuk menghapus karakter terakhir
function deleteLastCharacter() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

// Fungsi untuk menghitung operasi trigonometri
function trig(func) {
    setLastOperation(func); // Set operasi terakhir
    var result = document.getElementById('result');
    result.value = formatNumberWithDot(Math[func](parseFloat(result.value)));
}

// Fungsi untuk menghitung pangkat dua
function power() {
    setLastOperation("^"); // Set operasi terakhir
    var result = document.getElementById('result');
    result.value = formatNumberWithDot(Math.pow(parseFloat(result.value), 2));
}

// Fungsi untuk menghitung akar kuadrat
function sqrt() {
    setLastOperation("sqrt"); // Set operasi terakhir
    var result = document.getElementById('result');
    result.value = formatNumberWithDot(Math.sqrt(parseFloat(result.value)));
}

// Fungsi untuk menghitung logaritma
function log() {
    setLastOperation("log"); // Set operasi terakhir
    var result = document.getElementById('result');
    result.value = formatNumberWithDot(Math.log10(parseFloat(result.value)));
}

// Fungsi untuk menghitung logaritma natural
function ln() {
    setLastOperation("ln"); // Set operasi terakhir
    var result = document.getElementById('result');
    result.value = formatNumberWithDot(Math.log(parseFloat(result.value)));
}
//Function to quit the application
function quitAplication() {
    //Close the window or redirect to another page, depending on the requirement
    window.close(); //This will close the current tab or window
}
