function hitungVolumedanLuasPermukaanBalok(angka1,angka2,angka3) {
    let panjang = angka1;
    let lebar = angka2;
    let tinggi = angka3
    const Volume_Balok = panjang * lebar * tinggi
    document.write('Luas permukaan Balok : ', Volume_Balok)
}

hitungVolumedanLuasPermukaanBalok(5,8,10)