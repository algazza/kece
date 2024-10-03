@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-auto">
        <div class="mt-[5rem] mr-[1rem] lg:mr-[10rem] ml-[2rem] lg:ml-[14rem] md:ml-[2rem] xss:ml-[3rem] sm:ml-[2rem] mb-[2rem]  ">
            <div class="bg-white max-w-full text-3xl font-semibold rounded-md py-3">ArmorProperty</div>

            <div class="mt-[3rem] grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3">
                @foreach ($armor as $item)              
                <div class="bg-gray-100 rounded-xl">
                    <a href="{{ route('armor.view', ['slug' => $item->slug]) }}">
                        <div class="flex justify-center items-center py-4 px-3">
                            <img src="{{ asset('image/public/armor/' . $item->image) }}" alt="" class=" rounded-xl max-h-[220px]">
                        </div>
                            <div class="mb-4 ">
                                <h1 class="text-gray-900 text-4xl text-start font-semibold ml-4">RP {{ $item->harga }}</h1>
                                <h1 class="text-gray-900 text-2xl text-start ml-4">{{ $item->kecamatan }}</h1>
                                <h1 class="text-gray-500 text-lg text-start ml-4">{{ $item->alamat }}</h1>
                                <div class="flex">
                                <h1 class="text-gray-500 text-base text-start ml-4">LB : {{ $item->luas_bangunan }} m</h1>
                                <h1 class="text-gray-500 text-base text-start ml-4">LT : {{ $item->luas_tanah }} m</h1>
                            </div>
                        </div>
                    </a>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 mx-3 mb-3">
                        <button class="bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 duration-300 text-white font-semibold py-[0.3rem]">Edit</button>
                        <form action="{{ route('armor.delete', $item->id) }}" method="POST" enctype="multipart/form-data" class="bg-red-500 rounded-md cursor-pointer hover:bg-red-600 duration-300 text-white font-semibold py-[0.3rem]">
                            @csrf
                            @method('DELETE')
                            <button class="" type="sumbit">Hapus</button>
                        </form>
                    </div>
                 </div>
                @endforeach
            </div>
        </div>
        <a href="">
            <div class="flex justify-end fixed bottom-10 right-10">
              <a href="{{ route('armor.add') }}" class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-black text-black rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </a>
            </div>
          </a>
    </section>



@endsection
