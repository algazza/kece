@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-hidden pt-[5rem]">
    <section class=" h-[77%] w-[87%] mt-[5%] ml-[9%] rounded-[5px] py-[3rem] text-left justify-center flex flex-col">
        <div class="mx-14 mt-10 border-2 bg-white border-gray-300 rounded-lg">
  <div class=" text-center text-1xl text-gray-400 font-bold mt-[2rem]">{{ $kredit->jenis}}</div>
  <div class="text-center text-3xl font-bold">{{ $kredit->nama }}</div>
  <div class="p-8">
    <div class="flex gap-4">
      <input type="Name" id="readonlyinput" readonly name="name" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $kredit->no_handphone }}" />
      <input type="email" name="email" id="readonlyinput" readonly class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $kredit->email }}" />
    </div>
    <div class="my-6 flex gap-4">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly  placeholder="{{ $kredit->nik }}">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $kredit->pekerjaan }}">
    </div>
    <div class="my-6 flex gap-6">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly  placeholder="{{ $kredit->total_pinjaman }}">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $kredit->jangka_waktu }}">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $kredit->jenis_angunan }}">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $kredit->perhitungan_bunga }}">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="bunga per tahun">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $kredit->penghasilan_perbulan }}">
    </div>

    <div class="">
      <textarea name="textarea" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500" id="readonlyinput" readonly>{{ $kredit->catatan }}</textarea>
    </div>
  </div>
</div>
    </section>
</section>
@endsection
