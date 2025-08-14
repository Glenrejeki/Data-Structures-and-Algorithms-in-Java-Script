# 📚 Data-Structures-and-Algorithms-in-JavaScript

Belajar Struktur Data & Algoritma menggunakan JavaScript berdasarkan tutorial dari HuXn WebDev.

🎥 **Source Video**:  
[YouTube - Learn Data Structures & Algorithms in JavaScript Complete](https://youtu.be/wBtPGnVnA9g?si=EfyKwgTR1_tE-hZT)

---

## 📘 Catatan Belajar: Implementasi Array & Konsep Dasar JavaScript

---

### 🔹 1. `this`

- **Apa**: Kata kunci yang menunjuk ke objek saat ini (instance).
- **Fungsi**: Mengakses atau menyimpan properti atau method yang dimiliki oleh objek tersebut.

---

### 🔹 2. `return`

- **Apa**: Mengembalikan nilai dari sebuah fungsi.
- **Fungsi**: Digunakan agar nilai dari proses dalam fungsi bisa digunakan atau disimpan di luar fungsi tersebut.

---

### 🔹 3. `length`

- **Apa**: Panjang array atau jumlah elemen yang tersimpan.
- **Fungsi**: Dalam array buatan, digunakan untuk melacak jumlah elemen saat ini.

---

### 🔹 4. `let` (dalam loop)

- **Apa**: Kata kunci untuk membuat variabel yang hanya berlaku dalam blok (block scope).
- **Fungsi**: Umumnya digunakan di dalam loop agar variabel tidak bocor ke luar blok dan lebih aman daripada `var`.

---

## 📦 Method dalam Array Buatan (`myArray`)

---

### 🔹 5. `push(item)`

- **Fungsi**: Menambahkan item ke akhir array.
- **Langkah Kerja**:
  - Menyimpan item pada index `this.length`.
  - Menambahkan `this.length` setelahnya.

---

### 🔹 6. `get(index)`

- **Fungsi**: Mengambil elemen berdasarkan index tertentu dalam array.

---

### 🔹 7. `pop()`

- **Fungsi**: Menghapus item terakhir dari array.
- **Langkah Kerja**:
  - Mengambil item terakhir.
  - Menghapusnya dari array.
  - Mengurangi nilai `this.length`.

---

### 🔹 8. `shift()`

- **Fungsi**: Menghapus item pertama dari array dan menggeser semua elemen ke kiri.
- **Langkah Kerja**:
  - Menyimpan elemen pertama.
  - Menggeser semua elemen dari index 1 ke 0, 2 ke 1, dst.
  - Menghapus elemen terakhir yang sudah digeser.
  - Mengurangi nilai `this.length`.

---

### 🔹 9. `delete(index)`

- **Fungsi**: Menghapus elemen pada index tertentu dan menggeser sisanya ke kiri.
- **Langkah Kerja**:
  - Menyimpan data pada index yang akan dihapus.
  - Menggeser elemen dari index berikutnya ke posisi sebelumnya.
  - Menghapus elemen terakhir.
  - Mengurangi nilai `this.length`.

## 🧩 Catatan Tambahan: Chunking Array

Saat membuat fungsi `chunk()` untuk membagi array menjadi beberapa bagian kecil (chunks), penting untuk **menaikkan nilai index** pada setiap iterasi.

Contoh:

```js
const chunk = (array, size) => {
  const chunked = []
  let index = 0

  while (index < array.length) {
    const chunk = array.slice(index, index + size)
    chunked.push(chunk)
    index += size // ⬅️ WAJIB! Untuk menghindari infinite loop
  }

  return chunked
}

```

---

## ✍️ Penulis

Glen Rejeki Sitorus — Mahasiswa Informatika IT Del  



### Umum
- [ ] Item belum dicentang
- [x] Item sudah dicentang
