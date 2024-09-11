@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 font-poppins">

    <section id="testimonials" aria-label="What our customers are saying" class=" py-20 sm:py-32">
        <div class=" mx-auto max-w-7xl px-5 sm:px-6 lg:px-6">
          <div class="mx-auto max-w-2xl md:text-center ">
            <h2 class="font-display text-3xl tracking-tight text-center text-slate-900 sm:text-4xl bg-white py-4 px-8 rounded-md shadow-md  xss:ml-[1rem] xs:ml-[1rem]">Companies We Are Sponsor</h2>
          </div>
          <div class=" grid grid-cols-1 lg:grid-cols-4 mx-auto my-8 md:text-center xss:ml-[1rem] xs:ml-[1rem] md:ml-[3rem]" class="hidden xss:block sm2:block">
            <a href="{{ route('sponsor.index') }}"
              class="w-full flex justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
              All
           </a>
            <a href="{{ route('sponsor.index', ['jenis_sponsor' => 'MMT']) }}"
              class="w-full flex justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
              MMT
           </a>
           
           <a href="{{ route('sponsor.index', ['jenis_sponsor' => 'Tempat Tissue / Gelas']) }}"
              class="w-full flex justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
              Tempat Tissue / Gelas
           </a>
           
           <a href="{{ route('sponsor.index', ['jenis_sponsor' => 'Nomor Meja']) }}"
            class="w-full flex justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
            Nomor Meja
         </a>
          </div>
          <ul role="list"  
            class="mx-auto mt-8 grid max-w-2xl xss:ml-[1rem] xs:ml-[1rem] ml-[5rem]  grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">

            @foreach ($sponsor as $item)
              <div class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-white to-white p-0.5 shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                <div class="bg-white p-7 rounded-md">
                        <div class="flex">
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