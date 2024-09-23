@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins overflow-hidden">
    <div class="text-center flex pt-[5rem] xss:mx-[3rem] xs:[3rem]">
        <a href="{{ route ('jabatan') }}" class="hidden md:block xl:block">
        <i class='bx bx-arrow-back text-4xl rounded-lg font-semibold bg-white ml-[5rem] text-red-600 px-2 hover:bg-gray-300 shadow-sm duration-300 ' ></i>
    </a>
        <h1 class="text-3xl text-gray-700 border border-gray-300 shadow-md shadow-gray-400 font-semibold bg-white mx-auto max-w-xs py-3 px-5 rounded-md">Pejabat Eksekutif</h1>
    </div>
    <section class="mx-[5rem] grid grid-cols-1 md2:grid-cols-2 lg:grid-cols-4 mt-[5rem] mb-6">
        @foreach ($pejabat as $item)
            <a href="{{ route('pejabat.find', $item->id) }}" class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md my-6 xl:mx-6 md2:mx-6">
                <div class="relative">
                    <img class="w-full h-64 object-cover" src="{{ asset('image/public/pejabat/' . $item->image) }}" alt="Image">
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-1">{{ $item->nama }}</h3>
                    <p class="text-gray-800 text-base font-semibold pb-2">
                    {{ $item->jabatan }}
                    </p>
                    <p class="text-gray-700 text-base">
                    {{ $item->deskripsi }}
                    </p>
                </div>
            </a>
         @endforeach
    </section>
    <a href="{{ route('pejabat.add') }}" class="flex justify-end fixed bottom-10 right-10">
        <div class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-black text-black rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </div>
    </a>
</section>
@endsection