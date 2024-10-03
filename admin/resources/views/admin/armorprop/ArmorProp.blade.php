@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-auto">
        <div class="mt-[5rem] mr-[1rem] ml-[2rem] lg:ml-[5rem] md:ml-[2rem] xss:ml-[3rem] sm:ml-[2rem] mb-[2rem]  ">
            <div class="bg-white max-w-full text-3xl font-semibold rounded-md py-3">ArmorProperty</div>

            <div class="mt-[3rem] grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-3">
                @foreach ($armor as $item)              
                <a href="" class="bg-gray-100 rounded-xl cursor-pointer">
                    <div class="flex justify-center items-center py-4 px-3">
                    <img src="{{ asset('image/public/armor/' . $item->image) }}" alt="" class=" rounded-xl max-h-[220px]">
                    </div>
                    <div class="mb-4 ">
                        <h1 class="text-gray-900 text-4xl text-start font-semibold ml-4">RP. {{ $item->harga }}</h1>
                        <h1 class="text-gray-900 text-2xl text-start ml-4">{{ $item->kecamatan }}</h1>
                        <h1 class="text-gray-500 text-lg text-start ml-4 border border-b-gray-500">{{ $item->alamat }}</h1>
                        <div class="flex">
                        <h1 class="text-gray-500 text-base text-start ml-4">LB : {{ $item->luas_bangunan }} m</h1>
                        <h1 class="text-gray-500 text-base text-start ml-4">LT : {{ $item->luas_tanah }} m</h1>
                    </div>
                    </div>
                 </a>
                @endforeach
            </div>
        </div>
    </section>



@endsection
