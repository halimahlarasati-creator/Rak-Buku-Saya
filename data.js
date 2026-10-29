// FORMAT DATA BUKU
// cover: pakai link gambar atau taruh gambar di folder yang sama
// chapters: isi dengan array bab. 
const booksData = [
    {
        id: 1,
        title: "Senja di Ujung Jalan",
        author: "Gue Sendiri",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", // Ganti dengan link cover lo
        synopsis: "Sebuah cerita tentang perjalanan menemukan diri sendiri.",
        chapters: [
            {
                title: "Bab 1: Awal Mula",
                content: `<p>Langit sore itu berwarna jingga, memantulkan cahaya terakhir matahari yang enggan untuk pergi. Aku duduk di bangku taman, memandangi daun-daun kering yang berjatuhan.</p>
                          <p>"Kau tahu," kata suara di sebelahku, "daun yang jatuh bukan karena angin, tapi karena waktunya memang sudah habis."</p>
                          <p>Aku menoleh. Seorang pria tua dengan topi fedora usang sedang tersenyum padaku. Itulah hari di mana hidupku berubah selamanya.</p>`
            },
            {
                title: "Bab 2: Pertemuan",
                content: `<p>Keesokan harinya, hujan turun dengan deras. Aku berlari mencari tempat berteduh dan tanpa sengaja menabrak seseorang.</p>
                          <p>Buku-buku di tangannya berserakan di genangan air. "Maaf!" ucapku panik sambil memungutinya.</p>
                          <p>"Tidak apa-apa," jawabnya. Gadis itu menatapku dengan mata yang familiar. Ternyata dia adalah gadis dari bangku taman kemarin.</p>`
            }
        ]
    },
    {
        id: 2,
        title: "Kode Rahasia",
        author: "Gue Sendiri",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        synopsis: "Thriller tentang hacker yang menemukan konspirasi global.",
        chapters: [
            {
                title: "Prolog: Layar Hitam",
                content: `<p>Layar monitorku menyala hijau dalam gelapnya ruangan. Baris demi baris kode berjalan dengan cepat. Aku menahan napas.</p>
                          <p>Access Granted.</p>
                          <p>Aku berhasil masuk. Tapi yang ada di dalam server itu bukan data perusahaan, melainkan daftar nama-nama orang yang akan "hilang" besok pagi. Dan namaku ada di urutan ketiga.</p>`
            }
        ]
    }
];
