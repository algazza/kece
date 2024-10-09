@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 font-poppins">

    <section id="testimonials" aria-label="What our customers are saying" class="md:mr-[5rem] sm2:mr-[3rem] xss:mr-[1rem] md:ml-[8rem] sm2:ml-[4rem] xss:ml-[3rem] pt-[5rem]">
        <div class=" mx-auto max-w-full px-5 sm:px-6 lg:px-6">
            <div class="bg-white py-4 max-w-full rounded-xl shadow-sm">
                <h1 class="text-center text-xl font-semibold">Daftar Permintaan brand</h1>
            </div>
            <div class="block sss:hidden">
                <div class=" grid grid-cols-1 lg:grid-cols-4 gap-2 mx-auto my-8 md:text-center">
                    <a href="{{ route('sponsor.index') }}"
                    class="w-full justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
                    All
                </a>
                <a href="{{ route('sponsor.index', ['jenis_sponsor' => 'MMT']) }}"
                    class="w-full  justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
                    MMT
                </a>

                <a href="{{ route('sponsor.index', ['jenis_sponsor' => 'Tempat Tissue / Gelas']) }}"
                    class="w-full justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
                    Tempat Tissue / Gelas
                </a>

                <a href="{{ route('sponsor.index', ['jenis_sponsor' => 'Nomor Meja']) }}"
                    class="w-full justify-center font-medium rounded-md px-5 py-2 border bg-white text-gray-800 border-gray-200 cursor-pointer hover:bg-gray-900 hover:scale-105 hover:text-white duration-300">
                    Nomor Meja
                </a>
            </div>
        </div>
    </div>
            <ul role="list"
            class="mx-auto mt-8 grid max-w-2xl xss:ml-[1rem] xs:ml-[1rem] ml-[5rem]  grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            @foreach ($branding as $item)
                <div class="bg-white rounded-3xl mx-4 md:mx-auto max-w-screen-md border-2 border-gray-400 mt-16">
                    <div class="px-8 py-6 md:p-10">
                        <div class="flex">
                        <div class="font-display text-base text-slate-900 font-normal">{{ $item->bidang_usaha }}</div>
                        <div class="px-2 border-r-2 border-gray-200"></div>
                        <div class="font-display font-semibold text-base text-slate-900 px-2">{{ $item->jenis_sponsor }}</div>
                      </div>
                    <h2 class="text-3xl md:text-4xl font-medium leading-tight text-gray-800 mb-6">{{ $item->nama }}</h2>
                    <p class="text-base md:text-lg font-normal leading-normal text-gray-800 mb-6">{{ $item->email }}</p>
                    <div class="flex justify-center">
                        <a href="/brand" target="_blank" rel="noopener"
                            class="bg-white rounded-lg text-gray-800 font-medium text-base md:text-lg py-3 px-8 md:px-12 hover:bg-gray-100 transition-all duration-300 border border-gray-900 ease-in-out">Lihat Selengkapnya
                        </a>
                    </div>
                </div>
            </div>
            @endforeach
            </ul>
        </div>
    </section>
</section>


@endsection
