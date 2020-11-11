let obj_buah = [
    {
        'nama': 'strawberry',
        'warna': 'merah',
        'ada_bijinya': 'tidak',
        'harga': 9000 
    },
    {
        'nama': 'jeruk',
        'warna': 'oranye',
        'ada_bijinya': 'ada',
        'harga': 8000 
    },
    {
        'nama': 'Semangka',
        'warna': 'Hijau & Merah',
        'ada_bijinya': 'ada',
        'harga': 10000
    },
    {
        'nama': 'Pisang',
        'warna': 'Kuning',
        'ada_bijinya': 'tidak',
        'harga': 5000 
    },
];

document.write(`<p> ${
    "Nama : " + obj_buah[0].nama + `<br>` +
    "Warna : " + obj_buah[0].warna + `<br>` +
    "Ada bijinya : " + obj_buah[0].ada_bijinya + `<br>` +
    "Harga : " + obj_buah[0].harga
}</p>`);