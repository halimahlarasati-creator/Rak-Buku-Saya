const translations = {
    id: {
        subtitle: "Novel karya Halimah Larasati",
        continueReading: "Lanjutkan Membaca",
        previous: "← Sebelumnya",
        next: "Selanjutnya →",
        chapter: "Bab",
        page: "Halaman"
    },
    en: {
        subtitle: "Novels by Halimah Larasati",
        continueReading: "Continue Reading",
        previous: "← Previous",
        next: "Next →",
        chapter: "Chapter",
        page: "Page"
    }
};

const booksData = [
    {
        id: 1,
        title: "Senja di Ujung Jalan",
        author: "Halimah Larasati",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        synopsis: "Perjalanan menemukan diri sendiri.",
        chapters: [
            {
                title: "Bab 1: Awal Mula",
                content: `<p>Langit sore itu berwarna jingga, memantulkan cahaya terakhir matahari yang enggan untuk pergi. Aku duduk di bangku taman, memandangi daun-daun kering yang berjatuhan.</p>
                <p>"Kau tahu," kata suara di sebelahku, "daun yang jatuh bukan karena angin, tapi karena waktunya memang sudah habis."</p>
                <p>Aku menoleh. Seorang pria tua dengan topi fedora usang sedang tersenyum padaku. Itulah hari di mana hidupku berubah selamanya.</p>
                <p>Angin sore berhembus pelan, membawa aroma tanah basah dan kenangan yang sudah lama kubuang. Pria itu berdiri, merapikan topinya, dan berjalan meninggalkan bangku tanpa sepatah kata pun.</p>
                <p>Aku masih duduk di sana, menatap punggungnya yang semakin menjauh, sampai bayangannya hilang ditelan senja.</p>`
            },
            {
                title: "Bab 2: Pertemuan",
                content: `<p>Keesokan harinya, hujan turun dengan deras. Aku berlari mencari tempat berteduh dan tanpa sengaja menabrak seseorang.</p>
                <p>Buku-buku di tangannya berserakan di genangan air. "Maaf!" ucapku panik sambil memungutinya.</p>
                <p>"Tidak apa-apa," jawabnya. Gadis itu menatapku dengan mata yang familiar. Ternyata dia adalah gadis dari bangku taman kemarin.</p>
                <p>Kami duduk bersama di bawah atap halte, menunggu hujan reda. Dia bercerita tentang mimpinya, tentang kota yang ingin dia jelajahi, tentang buku-buku yang belum sempat dia baca.</p>
                <p>Dan aku? Aku hanya mendengarkan, sambil berharap hujan ini tidak pernah berhenti.</p>`
            },
            {
                title: "Bab 3: Rahasia",
                content: `<p>Minggu berganti minggu. Kami bertemu setiap sore di bangku yang sama. Dia selalu datang dengan buku baru, aku selalu datang dengan cerita baru.</p>
                <p>Tapi ada satu hal yang tidak pernah dia ceritakan — mengapa dia selalu menatap jam tangannya setiap pukul lima sore.</p>
                <p>"Ada apa dengan pukul lima?" tanyaku suatu hari.</p>
                <p>Dia tersenyum sedih. "Itu adalah waktu di mana aku harus pulang. Sebelum semuanya berubah."</p>
                <p>Aku tidak mengerti saat itu. Tapi sekarang, aku mengerti semuanya.</p>`
            }
        ]
    },
    {
        id: 2,
        title: "Kode Rahasia",
        author: "Halimah Larasati",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        synopsis: "Thriller tentang hacker dan konspirasi.",
        chapters: [
            {
                title: "Prolog: Layar Hitam",
                content: `<p>Layar monitorku menyala hijau dalam gelapnya ruangan. Baris demi baris kode berjalan dengan cepat. Aku menahan napas.</p>
                <p>Access Granted.</p>
                <p>Aku berhasil masuk. Tapi yang ada di dalam server itu bukan data perusahaan, melainkan daftar nama-nama orang yang akan "hilang" besok pagi. Dan namaku ada di urutan ketiga.</p>
                <p>Tanganku gemetar. Aku harus keluar dari sini. Sekarang. Tapi pintu apartemenku sudah diketuk dari luar.</p>
                <p>"Buka pintu," suara itu familiar. Terlalu familiar. Itu suara atasan yang sudah mati tiga tahun lalu.</p>`
            }
        ]
    },
    {
        id: 3,
        title: "Bunga di Musim Hujan",
        author: "Halimah Larasati",
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
        synopsis: "Romansa di musim yang tak terduga.",
        chapters: [
            {
                title: "Bab 1: Hujan Pertama",
                content: `<p>Hujan turun tanpa peringatan. Aku berlari mencari tempat berteduh di bawah pohon besar di taman kota.</p>
                <p>Di sana, seseorang sudah lebih dulu berdiri. Dia menatapku dengan senyum tipis. "Hujan selalu datang tepat waktu," katanya.</p>
                <p>Aku tidak tahu siapa dia. Tapi somehow, aku merasa seperti sudah mengenalnya seumur hidup.</p>`
            }
        ]
    }
];
