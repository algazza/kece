@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-x-hidden">
    <section class="ml-[5%] rounded-[5px] py-[3rem] text-left justify-center flex flex-col">


        <div class="mx-14 mt-10 border-2 bg-white border-gray-300 rounded-lg">
            <div class=" text-center text-1xl text-gray-400 font-bold mt-[2rem]"></div>
            <div class="text-center text-3xl font-bold">Identitas</div>
            <div class="p-8">
    <div class="grid grid-cols-1 sm:flex gap-4">
      <div class="w-full">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Nama</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $sponsor->nama }}" />
      </div>
      <div class="w-full">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Email</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $sponsor->email }}" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:flex gap-4">
      <div class="w-full">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">No. Handphone</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $sponsor->no_handphone }}" />
      </div>
      <div class="w-full">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Nama Acara</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $sponsor->nama_acara }}" />
      </div>
    </div>
    <div class="my-2 grid grid-cols-1 sm:flex gap-4">
      <div class="w-full">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Tanggal Awal Acara</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $sponsor->tanggal_awal }}" />
      </div>
      <div class="w-full">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Tanggal Akhir Acara</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $sponsor->tanggal_akhir }}" />
      </div>
    </div>
    <div class="my-4 grid grid-cols-1 sm:flex gap-4">
      <div class="w-full">
        <label for="" class="block text-gray-700 font-semibold mb-1">Lokasi</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $sponsor->lokasi }}" />
      </div>
    </div>

    <div class="my-4 grid grid-cols-1 sm:flex gap-4">
      <div class="w-full">
        <label for="" class="block text-gray-700 font-semibold mb-1">Catatan</label>
        <textarea name="textarea" id="text" class=" w-full resize-none rounded-md border border-slate-300 p-5 text-gray-500" id="readonlyinput" readonly> {{ $sponsor->catatan }} </textarea>
      </div>
    </div>

    <a href="{{ asset('image/public/sponsor/' . $sponsor->file )}}" class="text-lg tracking-tight text-slate-900 py-[6px] px-3 ">
      <div download class="flex brands-center px-3 py-1 bg-white text-black border border-gray-700 rounded-lg shadow-lg hover:bg-gray-200 duration-300
         transition">
        <i class='bx bxs-file-pdf'><p href="">Download PDF</p></i>
        
      </div>
    </a>
  </div>
</div>
    </section>
</section>
@endsection
