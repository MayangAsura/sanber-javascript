var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sorted = daftarBuah.sort();

sorted.forEach((data) => {
    document.write(`<li>${data}</li>`);
});