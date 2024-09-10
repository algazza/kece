@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins md:m-auto">
        <div class="pt-[5rem] justify-center">
            <h1 class="text-3xl mb-2 font-bold">Jenis Jabatan</h1>
        </div>
        <ul role="list" class="mt-8 flex flex-wrap justify-center grid-cols-1 gap-6 m-[1.5rem] sm:gap-8 lg:mt-20 lg:max-w-none lg:flex">
          <a href="{{ route('manajemen.index') }}" class="relative max-w-md rounded-lg bg-gradient-to-tr w-auto from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 md:w-[20rem]">
            <div class="bg-white p-7 rounded-md">
                    <div class="flex">
                    </div>
                    <div class="py-2">
                        <div>
                            <p class="text-lg tracking-tight font-semibold text-black py-[6px]"><i class='bx bxs-upvote text-7xl'></i></p>
                            <p class="text-lg tracking-tight font-semibold text-slate-900 py-[6px]">Komisaris</p>
                            <p class=" tracking-tight text-slate-900 py-[6px]">jabatan tertinggi dalam sebuah perusahaan yang bertugas untuk mengawasi dan memberikan masukan kepada direksi dalam menjalankan kegiatan perusahaan</p>
                
                        </div>  
                    </div>
                </div>
            </a>
          <a href="{{ route('direksi.index') }}" class="relative max-w-md rounded-lg bg-gradient-to-tr w-auto from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 md:w-[20rem]">
            <div class="bg-white p-7 rounded-md">
                    <div class="flex">
                    </div>
                    <div class="py-2">
                        <div>
                            <p class="text-lg tracking-tight font-semibold text-black py-[6px]"><i class='bx bx-user-plus text-7xl'></i></p>
                            <p class="text-lg tracking-tight font-semibold text-slate-900 py-[6px]">Direksi</p>
                            <p class=" tracking-tight text-slate-900 py-[6px]">organ perusahaan yang bertanggung jawab atas pengurusan perusahaan sehari-hari. Direksi memiliki tugas dan tanggung jawab</p>
                
                        </div>  
                    </div>
                </div>
            </a>
        </ul>

    </section>
@endsection