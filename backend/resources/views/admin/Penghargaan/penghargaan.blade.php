@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins md:m-auto">
        <div class="pt-[5rem] justify-center">
            <h1 class="text-3xl mb-2 font-bold">Laporan</h1>
        </div>
        <ul role="list" class="mt-8 flex flex-wrap justify-center grid-cols-1 gap-6 m-[1.5rem] sm:gap-8 lg:mt-20 lg:max-w-none lg:flex">
            <div class="relative max-w-md rounded-lg bg-gradient-to-tr w-auto from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 md:w-[20rem">
                <div class="bg-white p-7 rounded-md">
                    <div class="flex">
                    </div>
                    <div class="py-2">
                        <div>
                            <p class="text-lg tracking-tight font-semibold text-black py-[6px]"><i class='bx bx-calendar text-7xl'></i></p>
                            <p class="text-lg tracking-tight font-semibold text-slate-900 py-[6px]"></p>
                            <p class=" tracking-tight text-slate-900 py-[6px]"></p>
                
                        </div>  
                    </div>
                </div>
            </div>
        </ul>
    </section>
@endsection