@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-auto font-poppins ">
    <section class=" h-[77%] w-[87%] mt-[5%] ml-[9%] rounded-[5px] py-[3rem] text-left justify-center flex flex-col">
        <div class="mx-14 mt-10 border-2 bg-white border-gray-300 rounded-lg">
  <div class="mt-10 text-center font-bold">{{ $dashboard->nama }}</div>
  <div class="mt-3 text-center text-4xl font-bold">Jenis</div>
  <div class="p-8 justify-center md:justify-centert flex flex-col">
    <div class="gap-4 flex flex-col lg:flex-row">
      <input type="Name" id="readonlyinput" readonly name="name" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $dashboard->no_handphone }}" />
      <input type="email" name="email" id="readonlyinput" readonly class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="{{ $dashboard->email }}" />
    </div>
    <div class="my-6 flex flex-col lg:flex-row gap-4">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly  placeholder="{{ $dashboard->nik }}">
      <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $dashboard->pekerjaan }}">
    </div>
    <div>
      <div class="my-6 gap-6 flex flex-col lg:flex-row">
        <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly  placeholder="{{ $dashboard->total_pinjaman }}">
        <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $dashboard->jangka_waktu }}">
        <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $dashboard->jenis_angunan }}">
        <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $dashboard->perhitungan_bunga }}">
        <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="bunga per tahun">
        <input name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm " id="readonlyinput" readonly placeholder="{{ $dashboard->penghasilan_perbulan }}">
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <textarea name="textarea" id="text" cols="30" rows="10" class="mb-auto h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500" id="readonlyinput" readonly>{{ $dashboard->catatan }}</textarea>
    </div>
  </div>
</div>
    </section>
</section>
@endsection
