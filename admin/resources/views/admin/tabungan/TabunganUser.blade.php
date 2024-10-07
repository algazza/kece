@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-100 text-center justify-center items-center h-screen font-poppins overflow-y-hidden">
    <section class="ml-[5%] rounded-[5px] py-[3rem] text-left justify-center flex flex-col">
        <div class="mx-14 mt-2 rounded-lg">
  <div class=" text-center text-1xl text-gray-400 font-bold mt-[2rem]">{{ $tabungan->jenis}}</div>
  <div class="text-center text-3xl font-bold">Identitas</div>
  <div class="p-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="w-auto">
        <label for="no_handphone" class="block text-black font-semibold mb-1">Nama</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $tabungan->nama }}" readonly/>
      </div>
      <div class="w-auto">
        <label for="no_handphone" class="block text-black font-semibold mb-1">No. Handphone</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $tabungan->no_handphone }}" readonly/>
      </div>
      <div class="w-auto">
        <label for="no_handphone" class="block text-black font-semibold mb-1">Email</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $tabungan->email }}" readonly/>
      </div>
    </div>
    <div class="my-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="w-auto">
        <label for="no_handphone" class="block text-black font-semibold mb-1">Nik</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $tabungan->nik }}" readonly/>
      </div>
      <div class="w-auto">
        <label for="no_handphone" class="block text-black font-semibold mb-1">Pekerjaan</label>
        <input type="text" id="no_handphone" readonly name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $tabungan->pekerjaan }}" readonly/>
      </div>
    </div>
    <div class="my-4 grid grid-cols-1 sm:flex gap-4">
      <div class="w-full">
        <label for="" class="block text-black font-semibold mb-1">Alamat</label>
        <textarea name="textarea" id="text" class=" w-full resize-none rounded-md border border-slate-300 p-5 text-gray-500" id="readonlyinput" readonly>{{ $tabungan->alamat }}</textarea>
      </div>
    </div>
    <div class="text-center text-3xl font-bold mb-5">Pengajuan</div>



    <div class="my-4 grid grid-cols-1 sm:flex gap-4">
      <div class="w-full">
        <label for="" class="block text-black font-semibold mb-1">Catatan</label>
        <textarea name="textarea" id="text" class=" w-full resize-none rounded-md border border-slate-300 p-5 text-gray-500" id="readonlyinput" readonly>{{ $tabungan->catatan }}</textarea>
      </div>
    </div>

  </div>
</div>
    </section>
</section>
@endsection

