# Sushi Restaurant Web

Aplikasi web untuk restoran sushi yang memungkinkan pengguna untuk melihat menu, menambahkan item ke keranjang, dan melakukan checkout. Dilengkapi dengan fitur checkout yang menampilkan pesan sukses setelah transaksi.

## Fitur
- Menampilkan daftar menu sushi.
- Menampilkan detail item menu saat diklik.
- Menambahkan item ke keranjang dengan jumlah yang dapat disesuaikan.
- Menampilkan keranjang dengan total harga dan opsi checkout.
- Menampilkan pesan sukses setelah checkout.

## Teknologi yang Digunakan
- **Frontend**: React (Vite)
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Styling**: Bootstrap 5
- **State Management**: React Hooks (useState, useEffect)

## Instalasi dan Setup

### Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### 1. Clone Repository

```bash
git clone [https://github.com/username/sushi-restaurant.git](https://github.com/christinmanullang/restaurant-web.git)

```

### 2. Instalasi Backend (Express & MySQL)

- **Masuk ke direktori backend:**

```bash
cd server
```

- **Instal dependensi:**

```bash
npm install
```

- **Konfigurasi MySQL**:
  - Buat database MySQL dengan nama `sushi_restaurant`.
  - Pastikan tabel `menu` sudah ada di database MySQL Anda dengan struktur seperti ini:

  ```sql
  CREATE TABLE Menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT(11),
    image_url VARCHAR(255)
  );
  ```

- **Jalankan server backend:**

```bash
npm start
```

Backend akan berjalan di `http://localhost:3000`.

### 3. Instalasi Frontend (React)

- **Masuk ke direktori frontend:**

```bash
cd client
```

- **Instal dependensi:**

```bash
npm install
```

- **Jalankan aplikasi frontend:**

```bash
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`.

### 4. Jalankan Aplikasi
- Buka `http://localhost:5173` di browser Anda untuk melihat aplikasi.
- Backend akan berkomunikasi dengan frontend melalui API untuk mengambil data menu dan menambahkannya ke keranjang.
