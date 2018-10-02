import { Component, OnInit } from '@angular/core';
// import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  nim = '';
  nama = '';
  kelas = '';
  daftarMhs:Mahasiswa[] = [];
  mhs;

  constructor() { 

  }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new Mahasiswa(this.nama, this.nim, this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
