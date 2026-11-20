# Draft Pick MLBB + Panggung (Overlay Gabungan)

Overlay turnamen MLBB: **bar draft pick/ban** di bawah dan **panggung konten** (foto, video, capture layar, teks bergerak, komentar penonton, timer, background animasi) di atas. Semua dikontrol dari satu halaman.

## Halaman
| File | Fungsi |
|---|---|
| `panel.html` | Panel kontrol (tab **Panggung** dan tab **Draft Pick**) + preview langsung |
| `live.html` | **Output utama untuk OBS** (1920×1080): berisi scene Lobby + scene Draft, pindah dengan animasi dari panel |
| `lobby.html` | Scene Lobby esports (timer, panelis, jadwal match, banner, komentar). `?edit` = editor di panel, `?view` = tampilan siaran |
| `overlay.html` | Scene Draft (panggung + bar draft). Bisa dipakai sendiri tanpa lobby |
| `index.html` | Overlay draft lama (dipakai di dalam overlay.html; `?control` = panel draft) |
| `common.js` | Kode bersama (penyimpanan, upload media) |

## Cara pakai lokal
1. Buka folder di VS Code → klik kanan `panel.html` → **Open with Live Server**.
2. Klik **Buka Output Live** di panel, atau buka `live.html` di tab lain (browser yang sama) atau di OBS.
3. Di kotak **Pindah Scene** (kanan atas panel), pilih animasi + durasi lalu klik **Lobby** atau **Draft**.

## Cara pakai lewat GitHub Pages
1. Upload repo ke GitHub, lalu **Settings → Pages → Deploy from a branch → `main` / root**.
2. Alamat yang dipakai:
   - Kontrol: `https://USERNAME.github.io/NAMA-REPO/panel.html`
   - Output (OBS): `https://USERNAME.github.io/NAMA-REPO/live.html`

## Pakai di OBS
- Browser Source → URL `live.html`, ukuran **1920×1080**.
- Buka panel di **Docks → Custom Browser Docks** dengan URL `panel.html`, supaya panel dan overlay memakai penyimpanan browser yang sama.
- Data (pengaturan + foto/video yang di-upload) disimpan di browser (localStorage / IndexedDB), **tidak** di GitHub.

## Catatan
- Capture layar hanya tampil di halaman tempat capture dimulai. Di OBS, pakai Window Capture bawaan OBS.
- Gambar hero baru: `HeroPick/<nama>.png` dan `HeroBan/<nama>.png` (huruf kecil).
- Suara kustom (opsional): taruh `pick.mp3`, `ban.mp3`, `warn.mp3`, `end.mp3` di folder `sound/`.
