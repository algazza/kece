@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center font-poppins overflow-hidden">
    <div class="text-center pt-[5rem] xss:mx-[3rem] xs:[3rem]">
        <h1 class="text-3xl text-gray-700 border border-gray-300 shadow-md shadow-gray-400 font-semibold bg-white mx-auto max-w-xs rounded-md py-2">Jabatan</h1>
    </div>
    <div class="relative md:mx-[20rem] mx-[52rem] xss:mx-[4rem] xs:mx-[4rem] mt-[1rem]">
        <input
          class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search..."
        />
        <div class="absolute right-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      
        <div class="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    <section class="mx-[5rem] grid grid-cols-1 md2:grid-cols-2 lg:grid-cols-4 mt-[5rem] mb-6">
        @foreach ($manajemen as $item)
            <a href="{{ route('manajemen.find', $item->id) }}" class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md my-6 xl:mx-6 md2:mx-6">
                <div class="relative">
                    <img class="w-full h-64 object-cover" src="{{ asset('image/public/manajemen/' . $item->image) }}" alt="Image">
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
    <a href="{{ route('manajemen.add') }}" class="flex justify-end fixed bottom-10 right-10">
        <div class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-black text-black rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </div>
    </a>
</section>
@endsection