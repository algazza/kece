 @extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-x-hidden">
  <section class=" mt-[5rem] rounded-[5px] py-8 ml-[5rem] mr-[1rem] text-left flex justify-center">
    <div class="bg-white py-8 rounded-2xl shadow-lg max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row">
            <div class="md:flex-1 px-1">
                <h2 class="text-2xl font-bold flex justify-center text-gray-800 dark:text-black mb-2 sm:mt-5 xs:mt-5 sss:mt-5 xss:mt-5 ss:mt-5">{{ $kredit->nama }}</h2>
                <h2 class="text-lg font-semibold flex justify-center text-gray-800 dark:text-gray-600 mb-2 sm:mt-5 xs:mt-5 sss:mt-5 xss:mt-5 ss:mt-5">{{ $kredit->jenis}}</h2>
                <div class="grid gap-2 grid-cols-1 sm:grid-cols-3">
                  <div class="mt-2">
                      <label for="name" class="block mb-2 font-bold text-black pr-2">No Handphone</label>
                      <input type="text" id="name" name="name" placeholder="{{ $kredit->no_handphone }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                  </div>
                  <div class="mt-2">
                      <label for="name" class="block mb-2 font-bold text-black">Email</label>
                      <input type="text" id="name" name="name" placeholder="{{ $kredit->email }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                  </div>
                  <div class="mt-2">
                      <label for="name" class="block mb-2 font-bold text-black">NIK</label>
                      <input type="text" id="name" name="name" placeholder="{{ $kredit->nik }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                  </div>
                  </div>
                  <div class="grid gap-2 grid-cols-1 sm:grid-cols-1">
                    <div class="mt-2">
                        <label for="name" class="block mb-2 font-bold text-black pr-2">Pekerjaan</label>
                        <input type="text" id="name" name="name" placeholder="{{ $kredit->pekerjaan }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                    </div>
                </div>
                  <div class="grid gap-2 grid-cols-1 sm:grid-cols-1">
                    <div class="mt-2">
                        <label for="name" class="block mb-2 font-bold text-black pr-2">Alamat</label>
                        <input type="text" id="name" name="name" placeholder="{{ $kredit->alamat }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                    </div>
                </div>
                  <div class="grid gap-2 grid-cols-1 sm:grid-cols-4">
                    <div class="mt-2">
                        <label for="name" class="block mb-2 font-bold text-black pr-2">Total Pinjaman</label>
                        <input type="text" id="name" name="name" placeholder="{{ $kredit->total_pinjaman }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="block mb-2 font-bold text-black pr-2">Jangka Waktu</label>
                        <input type="text" id="name" name="name" placeholder="{{ $kredit->jangka_waktu }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="block mb-2 font-bold text-black pr-2">Jenis Angunan</label>
                        <input type="text" id="name" name="name" placeholder="{{ $kredit->jangka_waktu }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="block mb-2 font-bold text-black pr-2">perhitungan bunga</label>
                        <input type="text" id="name" name="name" placeholder="{{ $kredit->perhitungan_bunga }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                    </div>
                </div>
                <div class="grid gap-2 grid-cols-1 sm:grid-cols-1">
                  <div class="mt-2">
                      <label for="name" class="block mb-2 font-bold text-black pr-2">Code</label>
                      <input type="text" id="name" name="name" placeholder="{{ $kredit->code }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                  </div>
              </div>
                <div class="grid gap-2 grid-cols-1 sm:grid-cols-1">
                  <div class="mt-2">
                      <label for="name" class="block mb-2 font-bold text-black pr-2">Penghasilan</label>
                      <input type="text" id="name" name="name" placeholder="{{ $kredit->penghasilan_perbulan }}" class="border border-gray-300 shadow p-3 w-full rounded " readonly>
                  </div>
              </div>
                <div class="grid gap-2 grid-cols-1 sm:grid-cols-1">
                  <div class="mt-2">
                      <label for="name" class="block mb-2 font-bold text-black pr-2">Catatan</label>
                      <textarea type="text" id="name" name="name" class="border border-gray-300 shadow p-3 w-full rounded " readonly>{{ $kredit->catatan }}</textarea>
                  </div>
              </div>
            </div>
        </div>
</section>
</section>
@endsection
