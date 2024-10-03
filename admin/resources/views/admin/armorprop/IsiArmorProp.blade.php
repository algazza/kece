@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-100 text-center justify-center items-center h-screen font-poppins overflow-auto">
        <div class="mt-[5rem] mr-[1rem] lg:mr-[10rem] ml-[2rem] lg:ml-[14rem] md:ml-[2rem] xss:ml-[3rem] sm:ml-[2rem] mb-[2rem]  ">
            <div class="grid grid-cols-1  lg:grid-cols-2">
                <div class="m-4 grid gap-2 md:-order-1 justify-center ">
                    <img src="{{ asset('image/public/armor/' . $armor->image) }}" alt="" class=" rounded-lg w-[25rem]">
                    <h1 class="text-5xl text-start font-semibold">RP. {{ $armor->harga }}</h1>
                    <div class="flex gap-4">
                        <h1 class="text-gray-500 text-base text-start ml-4">LB : {{ $armor->luas_bangunan }} m</h1>
                        <h1 class="text-gray-500 text-base text-start ml-4">LT : {{ $armor->luas_tanah }} m</h1>
                        <h1 class="text-gray-500 text-base text-start ml-4"><i class='bx bxs-bed mr-2'></i> {{ $armor->bed }}</h1>
                        <h1 class="text-gray-500 text-base text-start ml-4"><i class='bx bxs-shower mr-2'></i> {{ $armor->shower }}</h1>
                    </div>
                    <div class="bg-white rounded-md py-5 border border-gray-900 grid grid-cols-1 gap-1 ">
                        <a href="{{ route('noAdmin') }}" class="bg-green-500 text-white font-semibold text-lg py-2 rounded-lg px-1 mx-3"><i class='bx bxl-whatsapp'></i> Whatsapp</a>
                        <a href="{{ $armor->instagram }}" class="bg-[#e1306c] text-white font-semibold text-lg py-2 rounded-lg px-1 mx-3"><i class='bx bxl-instagram' ></i> instagram</a>
                    </div>

                </div>
                <div class="text-center grid justify-center">
                    <h1 class="text-[2.5rem] font-semibold pb-3">{{ $armor->kecamatan }}</h1>
                    <p class="text-lg ">{{ $armor->alamat_lengkap }}</p>
                        <div class="grid">
                        <div class="mt-[2rem]">
                    <h1 class="text-[2.5rem] text-start font-semibold pb-3">Deskripsi</h1>
                    <div class="my-[1rem] text-start text-[1.1rem]">
                        {!! $armor->deskripsi !!}
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <a href="{{ route('armor.index') }}" class="bg-red-500 py-1 px-6 text-white rounded-md">Kembali</a>
        </div>
    </div>
</section>



@endsection
