const greeting = `main game puzzle yuukkk... klik di tiap foto2 nya yaa, nnti ada doa untuk res...`;
const quotes = [
    `cieeeeeee ... selamat sudah genap 25 tahun orang baaiikkkk 🤗`,
    `Semoga berkah umurnya, bisa bermanfaat untuk semua orang`,
    `Semoga sehat selalu, bahagia selalu, semoga makin lebih baik lagi, makin dewasa`,
    `Jangan bosen bosen jadi orang baik yaa`,
    `Tetap jadi orang yang aku kenaaal`,
    `Segala impian dan cita - cita nya semoga terwujud, selalu dimudahkan oleh Allah SWT`,
    `Tetap menjadi perempuan yang mandiri, sholehah, penyabar`,
    `Apapun yang terjadi kedepan nya, semoga lebih baik`,
    `Yang terbaik ya cantiikkk`
];
const closed = [
    `Tauuu gaa, kenapa aku menggunakan konsep puzzle ini? Puzzle itu kan harus disusun menjadi utuh ya, semoga di umur seperempat abad ini bisa menjadi perempuan yang <b>"UTUH"</b>`,
    `daann, kenapa menggunakan bunga mawar.. ya betuull, resti tuh ibarat bunga mawar bagiku... <br> Bunga mawar itu mempunyai duri, jadi susah untuk dekatin atau bahkan dimiliki... Tapii, dibalik duri nya ada bunga yang sangatt indah sekali dan harum semerbak. Kalau sudah bisa digenggam pasti akan sngat sulit untuk melepaskan nya :) <br>dan aku menunggu momen itu hehehe`
];
let counter = 0;
$(document).ready(function(){
    Swal.fire({
        title: 'Haloooo',
        text: greeting
    })

    $('.img-fluid').click(function(){
        const id = $(this).data('id');
        const isClicked = $(this).hasClass('is-clicked');
        if(isClicked) return;
        // change image src
        $(this).attr('src', `assets/bunga/${id}.jpg`);
        Swal.fire({
            title: 'HBD Resti Noor Fahmi',
            text: quotes[counter]
        });
        counter++;
        $(this).addClass('is-clicked');

        if(counter == quotes.length){
            setTimeout(() => {
                Swal.fire({
                    title: 'Ucapan...',
                    html: closed[0],
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Lanjut yaa, terakhir kok :)'
                }).then((result) => {
                    Swal.fire({
                        title: 'Ucapan terakhir...',
                        html: closed[1],
                        confirmButtonText: 'Maaciihh 🤍'
                    });
                })
            }, 2500);
            
        }
    })

});