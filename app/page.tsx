import Link from "next/link";

const workshopMoments = [
  {
    title: "Peluncuran Imajinasi",
    detail:
      "Mulai dengan permainan perkenalan: setiap orang menggambar karakter imajiner dan memperkenalkan kebiasaan uniknya dalam 30 detik.",
  },
  {
    title: "Eksperimen Dunia Mini",
    detail:
      "Gunakan balok dan kertas warna untuk membangun kota fantasi. Aturan: tidak boleh ada bentuk yang sama berdampingan.",
  },
  {
    title: "Pertunjukan Kilat",
    detail:
      "Latihan improvisasi 3 menit untuk menceritakan kejadian dramatis di kota tadi. Kreator lain bertugas menambahkan efek suara.",
  },
];

const artifactIdeas = [
  {
    title: "Kartu Misi Rahasia",
    description:
      "Set kartu dengan kombinasi kata benda + kata sifat + aksi. Peserta mengambil tiga kartu untuk menentukan misi permainan mereka.",
  },
  {
    title: "Dadu Emosi",
    description:
      "Kubus lima sisi berisi ekspresi. Setiap giliran, lempar dadu untuk menentukan gaya bercerita selanjutnya.",
  },
  {
    title: "Peta Portal",
    description:
      "Poster lipat yang menampilkan portal ke dunia lain. Setiap portal punya tantangan singkat agar cerita tetap bergerak.",
  },
  {
    title: "Stiker Energi",
    description:
      "Stiker berbentuk tokoh mini yang bisa dipindah-pindah sebagai penanda kontribusi peserta di papan ide.",
  },
];

const quickGuides = [
  {
    heading: "Siapkan nada",
    body: "Putar musik latar yang ringan. Minta semua orang bergoyang mengikuti ritme selama satu menit untuk menyamakan energi.",
  },
  {
    heading: "Atur ekspektasi",
    body: "Tegaskan bahwa kesalahan adalah bagian dari permainan. Setiap kekeliruan harus dirayakan dengan tepuk tangan.",
  },
  {
    heading: "Beri peran",
    body: "Tentukan fasilitator cerita, penjaga waktu, dan pengamat detail. Rotasi setiap 15 menit agar semua mencoba peran baru.",
  },
];

export default function Page() {
  return (
    <main>
      <header>
        <h1>Dokumen Mainan</h1>
        <p>
          Sebuah dokumen inspirasi untuk membuat sesi bermain yang kolaboratif, penuh
          kejutan, dan mudah direplikasi. Gunakan panduan ini untuk menyulap ruang
          mana pun menjadi laboratorium imajinasi.
        </p>
      </header>

      <section>
        <h2>Skema Sesi Permainan</h2>
        <p>
          Ikuti alur tiga babak berikut untuk menjaga energi tetap dinamis dan membuka
          ruang eksplorasi bebas risiko.
        </p>
        <div className="timeline">
          {workshopMoments.map((item) => (
            <article key={item.title} className="timeline-item">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Artefak Pendukung</h2>
        <p>
          Buat atau cetak komponen ini untuk menambah tekstur pengalaman, dari penentu
          alur hingga pemicu ide spontan.
        </p>
        <div className="grid">
          {artifactIdeas.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Tips Fasilitator</h2>
        <dl>
          {quickGuides.map((guide) => (
            <div key={guide.heading}>
              <dt>{guide.heading}</dt>
              <dd>{guide.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer>
        <h2>Perlu Format Lain?</h2>
        <p>
          Adaptasi dokumen ini menjadi booklet cetak atau halaman web interaktif. Bagi
          versi kamu dengan tagar <strong>#dokumenmainan</strong> agar komunitas lain
          bisa mencobanya.
        </p>
        <Link className="action" href="https://vercel.com/templates" target="_blank">
          Lihat contoh proyek
        </Link>
      </footer>
    </main>
  );
}
