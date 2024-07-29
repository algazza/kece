@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-hidden">
        <section class="grid grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); pt-[3rem]">
            <a href="">
                <div class="flex gap-[0.5rem] pt-[5rem] pb-[2rem] px-[10rem] bg-gray-200 w-screen">
                    <div class="bg-slate-400 w-[15rem] h-[10rem] block justify-center rounded-[5px] box-border border-[0.5px] border-black shadow-lg"></div>
                    <div class="bg-gray-50 w-[40rem] h-[10rem] block justify-center rounded-[5px] box-border border-[0.5px] border-black shadow-lg">
                        <h1 class="font-bold">p</h1>
                        <p class="absolute ml-[0.7] font-medium">Text</p>
                    </div>
                </div>
                </a>
            <a href="">
                <div class="bg-slate-400 w-[15rem] h-[10rem] block justify-center rounded-[5px] box-border border-[0.5px] border-black shadow-lg"></div>
            </a>
        </section>
    </section>
@endsection