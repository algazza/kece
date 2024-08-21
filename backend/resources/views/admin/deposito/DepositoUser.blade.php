@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-hidden">
    <section class="bg-gray-50 h-[77%] w-[87%] mt-[8%] ml-[9%] rounded-[5px] py-[3rem] text-left justify-center flex flex-col">
        <div class="inline-block mx-[3rem] mt-[1rem]">
            <p class="bg-slate-400 inline-block rounded-[20px] text-[1.1rem] font-semibold text-gray-50 box-border border-[0.5px] border-white shadow-lg px-[2rem] py-[0.5rem]">
                {{ $deposito->nama }}
            </p>
        </div>
        <div class="grid grid-cols-2">
            <div class="mx-[1rem] mt-[1.5rem]">
                <div class="bg-gray-100 inline-b lock rounded-[15px] text-[1.1rem] box-border border-[0.5px] border-white shadow-lg mx-[3rem]">
                    <p class="px-[3rem] py-[0.2rem]">Identify</p>
                </div>
                <div class="flex flex-col mx-[3.7rem] my-[1.3rem] gap-2">
                    <div class="flex gap-5">
                        <i class='bx bxs-envelope text-[1.4rem] mt-[0.2rem]'></i>
                        <p class="leading-7">{{ $deposito->email }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.4rem] mt-[0.2rem]'></i>
                        <p class="leading-7">{{ $deposito->no_handphone }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.4rem] mt-[0.2rem]'></i>
                        <p class="leading-7">{{ $deposito->nik }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.4rem] mt-[0.2rem]'></i>
                        <p class="leading-7">{{ $deposito->pekerjaan }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.4rem] mt-[0.2rem]'></i>
                        <p class="leading-7">{{ $deposito->alamat }}</p>
                    </div>
                    <div class="bg-gray-100 rounded-[15px] text-[0.9rem] box-border border-[0.5px] border-white shadow-2xl h-[6.5rem] mt-[0.7rem] p-[0.5rem]">
                        <p>{{ $deposito->catatan }}</p>
                    </div>
                </div>
            </div>                       
            <div class="mx-[1rem] mt-[2.5rem]">
                <div class="bg-gray-100 inline-block rounded-[15px] text-[1.1rem] box-border border-[0.5px] border-white shadow-lg mx-[3rem]">
                    <p class="px-[3rem] py-[0.2rem]">Submission</p>
                </div>
                <div class="flex flex-col mx-[3.7rem] my-[1.3rem] gap-3">
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.5rem] mt-[0.2rem]'></i>
                        <p class="leading-7 text-[1rem]">{{ $deposito->total_pinjaman }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.5rem] mt-[0.2rem]'></i>
                        <p class="leading-7 text-[1rem]">{{ $deposito->jangka_waktu }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.5rem] mt-[0.2rem]'></i>
                        <p class="leading-7 text-[1rem]">{{ $deposito->jenis_angunan }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.5rem] mt-[0.2rem]'></i>
                        <p class="leading-7 text-[1rem]">{{ $deposito->perhitungan_bunga }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.5rem] mt-[0.2rem]'></i>
                        <p class="leading-7 text-[1rem]">{{ $deposito->bunga_pertahun }}</p>
                    </div>
                    <div class="flex gap-5">
                        <i class='bx bxs-bell text-[1.5rem] mt-[0.2rem]'></i>
                        <p class="leading-7 text-[1rem]">{{ $deposito->penghasilan_perbulan }}</p>
                    </div>
                </div>
            </div>  
        </div>
    </section>
</section>
@endsection
