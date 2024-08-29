@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins">
        <div class="pt-[5rem] justify-start">
            <h1 class="text-3xl mb-2 font-bold">Laporan GCG</h1>
        </div>

        <ul role="list" class=" mt-8 grid max-w-2xl justify-center  grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3 mx-auto px-[9rem] mb-[2rem]">
            @foreach ($laporan as $item)
                <div class="p-8 w-auto border border-indigo-300 rounded-2xl hover:shadow-xl bg-white hover:shadow-indigo-50 flex flex-col items-center"href="#">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOF3qatBalC_iqwxk412bsLvNka5vRer5BAWU1XNvmhcA2elB4" class="shadow rounded-lg overflow-hidden border" >
                    <div class="mt-8">
                        <h4 class="font-bold text-xl">{{ $item->tanggal }}</h4>
                        <div class="mt-5 flex gap-[1rem]">
                            <form action="{{ route('laporan.delete', $item->id) }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 hover:scale-95 duration-300">Hapus</button>
                            </form>
                            <a href="{{ asset('image/public/laporan/' . $item->file_laporan) }}" target="_blank" class="inline-flex items-center rounded-md border-[1px] bg-white border-red-600 px-6 py-2 text-sm leading-4 text-red-600 shadow-red-500 font-semibold hover:text-white shadow-sm hover:bg-red-700 hover:scale-95 duration-300">
                                Lihat
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </ul>

    <div class="flex justify-end fixed bottom-10 right-10 bg-gray-50 rounded-full box-borde">
        <button class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-[1px] border-black shadow-gray-400 shadow-inner text-black rounded-full" onclick="openModal('modelConfirm')">
            <i class='bx bxs-file-plus text-[1.5rem]'></i>
        </button>
    </div>


        <div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
            <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                <form action="{{ route('laporan.post') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="flex flex-col items-center justify-center text-center cursor-pointer gap-1 p-[1rem]">
                        <div class="rounded-md border border-indigo-500 bg-gray-50 shadow-md w-36 p-4 mt-[2rem]">
                            <div class="flex flex-col items-center gap-2 cursor-pointer" onclick="document.getElementById('upload').click();">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-white stroke-indigo-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span class="text-gray-600 font-medium">Upload file</span>
                            </div>
                            <input id="upload" type="file" class="hidden" name="file_laporan" />
                        </div>                        
                        <div class="mt-4 px-[2rem] w-full">
                            <input type="text" name="tanggal" class="rounded-[5px] block p-2.5 w-full z-20 text-sm text-gray-900 shadow-inner text-center shadow-gray-400" placeholder="Tanggal"/>
                            <input type="hidden" name="jenis_laporan" value="gcg">
                        </div>
                        <div class="mt-4 mb-2">
                            <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 hover:scale-95 duration-300"
                                    onclick="closeModal('modelConfirm')">Close</button>
                           <button type="submit" class="inline-flex items-center rounded-md border-[1px] bg-white border-red-600 px-10 py-2 text-sm leading-4 text-red-600 shadow-red-500 font-semibold hover:text-white shadow-sm hover:bg-blue-500 hover:scale-95 duration-300">Upload</button>
                       </div>
                    </div>            
                </form>
            </div>
        </div>
    </section>
    
    <script type="text/javascript">
        window.openModal = function(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }
    
        window.closeModal = function(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
    
        document.onkeydown = function(event) {
            event = event || window.event;
            if (event.keyCode === 27) {
                let modals = document.getElementsByClassName('modal');
                Array.prototype.slice.call(modals).forEach(i => {
                    i.style.display = 'none';
                });
            }
        };
        
    </script>
    
@endsection