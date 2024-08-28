@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins">
        <div class="pt-[5rem] justify-center">
            <h1 class="text-3xl mb-2 font-bold">Laporan</h1>
        </div>
        <ul role="list" class="mx-auto mt-8 grid max-w-2xl   grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          <div class="relative mx-[7rem] max-w-md rounded-lg bg-gradient-to-tr from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
            <div class="bg-white p-7 rounded-md">
                    <div class="flex">
                    </div>
                    <div class="py-2">
                        <div>
                            <p class="text-lg tracking-tight font-semibold text-black py-[6px]"><i class='bx bx-calendar text-7xl'></i></p>
                            <p class="text-lg tracking-tight font-semibold text-slate-900 py-[6px]">Laporan triwulan</p>
                            <p class="text-lg tracking-tight text-slate-900 py-[6px]">laporan yang dibuat secara rutin setiap tiga bulan dan berisi informasi tentang pelaksanaan program kerja dan kinerja instansi atau satuan kerja.</p>
                
                        </div>  
                    </div>
                </div>
            </div>
          <div class="relative mx-[7rem] max-w-md rounded-lg bg-gradient-to-tr from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
            <div class="bg-white p-7 rounded-md">
                    <div class="flex">
                    </div>
                    <div class="py-2">
                        <div>
                            <p class="text-lg tracking-tight font-semibold text-black py-[6px]"><i class='bx bx-wink-smile text-7xl'></i></p>
                            <p class="text-lg tracking-tight font-semibold text-slate-900 py-[6px]">Laporan GCG</p>
                            <p class="text-lg tracking-tight text-slate-900 py-[6px]">laporan pelaksanaan tata kelola perusahaan yang baik (Good Corporate Governance)</p>
                
                        </div>  
                    </div>
                </div>
            </div>
          <div class="relative mx-[7rem] max-w-md rounded-lg bg-gradient-to-tr from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
            <div class="bg-white p-7 rounded-md">
                    <div class="flex">
                    </div>
                    <div class="py-2">
                        <div>
                            <p class="text-lg tracking-tight font-semibold text-black py-[6px]"><i class='bx bx-calendar-week text-7xl'></i></p>
                            <p class="text-lg tracking-tight font-semibold text-slate-900 py-[6px]">Laporan tahunan</p>
                            <p class="text-lg tracking-tight text-slate-900 py-[6px]"> dokumen resmi yang menggambarkan keadaan keuangan dan operasional suatu perusahaan selama satu tahun</p>
                
                        </div>  
                    </div>
                </div>
            </div>
    
        </ul>
    </section>
@endsection