@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 font-poppins">

    <section id="testimonials" aria-label="What our customers are saying" class=" py-20 sm:py-32">
        <div class=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div class="mx-auto max-w-2xl md:text-center ">
            <h2 class="font-display text-3xl tracking-tight text-center text-slate-900 sm:text-4xl bg-white py-4 px-8 rounded-md shadow-md ">Companies We Are Sponsor</h2>
          </div>
          <div class="mx-auto flex my-8 max-w-2xl md:text-cente" class="hidden sm2:block">
              <a href="#" aria-current="false"
                  class="w-full flex justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
                  Warung Makan
              </a>
          
              <a href="#" aria-current="false"
                  class="w-full flex justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
                  Toko Kelontong
              </a>
          
              <a href="#" aria-current="false"
                  class="w-full flex items-center gap-x-2 justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200  cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
                  cihuyy
              </a>
            </div>
          <ul role="list"  
            class="mx-auto mt-8 grid max-w-2xl   grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">

            @foreach ($sponsor as $item)
              <div class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                <div class="bg-white p-7 rounded-md">
                        <div class="flex p">
                          <div class="font-display text-base text-slate-900 font-normal">{{ $item->bidang_usaha }}</div>
                          <div class="px-2 border-r-2 border-gray-200"></div>
                          <div class="font-display font-semibold text-base text-slate-900 px-2">{{ $item->jenis_sponsor }}</div>
                        </div>
                        <div class="py-2">
                          <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : {{ $item->nama }}</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : {{ $item->nik }}</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : {{ $item->email }}</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : {{ $item->alamat }}</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : {{ $item->no_handphone }}</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : {{ $item->nama_usaha }}</p>
                                <div class="flex flex-col">
                                  <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : {{ $item->catatan }}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
              </div>    
            @endforeach 

            </ul>

    </section>
   
    
@endsection