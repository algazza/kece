@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-x-hidden">
    <section class="ml-[5%] rounded-[5px] py-[3rem] text-left justify-center flex flex-col">
        <div class="mx-14 mt-10 border-2 bg-white border-gray-300 rounded-lg">
  <div class=" text-center text-1xl text-gray-400 font-bold mt-[2rem]">{{ $pickup->jenis}}</div>
  <div class="text-center text-3xl font-bold">{{ $pickup->nama }}</div>
  <div class="p-8">
    <div class="flex gap-4">
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">No. Handphone</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->no_handphone }}" />
      </div>
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Email</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->email }}" />
      </div>
    </div>
    <div class="my-2 flex gap-4">
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Nik</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->nik }}" />
      </div>
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Pekerjaan</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->pekerjaan }}" />
      </div>
    </div>
    <div class="my-4 flex gap-4">
      <div class="w-full">
        <label for="" class="block text-gray-700 font-semibold mb-1">Alamat</label>
        <textarea name="textarea" id="text" class=" w-full resize-none rounded-md border border-slate-300 p-5 text-gray-500" id="readonlyinput" readonly>{{ $pickup->alamat }}</textarea>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Produk Tabungan</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->produk_tabungan }}" />
      </div>
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Tanggal</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->tanggal }}" />
      </div>
    </div>
    <div class="my-5 flex gap-4">
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Waktu</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->waktu }}" />
      </div>
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Lokasi</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->lokasi }}" />
      </div>
      <div class="w-1/2">
        <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Code</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $pickup->code }}" />
      </div>
    </div>

    <div class="my-4 flex gap-4">
      <div class="w-full">
        <label for="" class="block text-gray-700 font-semibold mb-1">Catatan</label>
        <textarea name="textarea" id="text" class=" w-full resize-none rounded-md border border-slate-300 p-5 text-gray-500" id="readonlyinput" readonly>{{ $pickup->catatan }}</textarea>
      </div>
    </div>
    
  </div>
</div>
    </section>
</section>
@endsection
