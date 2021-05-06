// Object

var dataDiri = {
  nama: 'Ulhaq',
  umur: '16 Tahun',
  profesi: 'Pelajar',
  alamat: {
    gang: 15,
    desa: 'Undaan Tengah',
    kota: 'Kudus',
    provinsi: 'Jawa Tengah'
  },
  print: function () {
    console.log('Halo, nama saya ' + this.nama + ', umur saya ' + this.umur + ', saya seorang ' + this.profesi + '\n' + 'Saya tinggal di Provinsi ' + this.alamat.provinsi + ', Kota ' + this.alamat.kota + ', Desa ' + this.alamat.desa + ', Gang.' + this.alamat.gang)
  }
}

dataDiri.print()
// dataDiri['print']()