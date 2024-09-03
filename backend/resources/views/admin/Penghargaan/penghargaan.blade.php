        @extends('layout')
        @section('content')
            <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins ">
                <div class="pt-[5rem] justify-center">
                    <h1 class="text-3xl mb-2 font-bold">Penghargaan</h1>
                </div>
                <div class="justify-center my-[6rem] lg:mx-[8rem] md:mx-[8rem] sm:mx-[3rem] xss:mx-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a class="p-8 max-w-lg bg-white rounded-2xl shadow-lg duration-300 flex flex-col items-center"href="#">
                    <img src="https://img.gta5-mods.com/q95/images/trevor-meth-face-no-more/70a568-6.png" class="shadow rounded-lg overflow-hidden border" >
                    <div class="mt-8">
                        <p class="mt-2 font-bold text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                        </p>
                    <div class="mt-5">
                    <button type="button" class="inline-flex items-center rounded-md border border-gray-400 bg-white px-3 py-2 text-sm font-medium leading-4 text-black hover:text-white shadow-sm duration-300 hover:bg-gray-700">Edit</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-red-600 border-gray-200 border px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm duration-300 hover:bg-red-700">Delete</button>
                    </div>
                    </div>
                </a>
                <a class="p-8 max-w-l bg-white rounded-2xl shadow-lg duration-300 flex flex-col items-center"href="#">
                    <img src="https://img.gta5-mods.com/q95/images/trevor-meth-face-no-more/70a568-6.png" class="shadow rounded-lg overflow-hidden border" >
                    <div class="mt-8">
                        <p class="mt-2 font-bold text-gray-600">Penghargaan dari PT Sarana Multigriya Finansial (Persero)
                        </p>
                    <div class="mt-5">
                    <button type="button" class="inline-flex items-center rounded-md border border-gray-400 bg-white px-3 py-2 text-sm font-medium leading-4 text-black hover:text-white shadow-sm duration-300 hover:bg-gray-700">Edit</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-red-600 border-gray-200 border px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm duration-300 hover:bg-red-700">Delete</button>
                    </div>
                    </div>
                </a>
                <a class="p-8 max-w-l bg-white rounded-2xl shadow-lg duration-300 flex flex-col items-center"href="#">
                    <img src="https://img.gta5-mods.com/q95/images/trevor-meth-face-no-more/70a568-6.png" class="shadow rounded-lg overflow-hidden border" >
                    <div class="mt-8">
                        <p class="mt-2 font-bold text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                        </p>
                    <div class="mt-5">
                    <button type="button" class="inline-flex items-center rounded-md border border-gray-400 bg-white px-3 py-2 text-sm font-medium leading-4 text-black hover:text-white shadow-sm duration-300 hover:bg-gray-700">Edit</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-red-600 border-gray-200 border px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm duration-300 hover:bg-gred-700">Delete</button>
                    </div>
                    </div>
                </a>
                <a class="p-8 max-w-lg bg-white rounded-2xl shadow-lg duration-300 flex flex-col items-center"href="#">
                    <img src="https://img.gta5-mods.com/q95/images/trevor-meth-face-no-more/70a568-6.png" class="shadow rounded-lg overflow-hidden border" >
                    <div class="mt-8">
                        <p class="mt-2 font-bold text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                        </p>
                    <div class="mt-5">
                    <button type="button" class="inline-flex items-center rounded-md border border-gray-400 bg-white px-3 py-2 text-sm font-medium leading-4 text-black hover:text-white shadow-sm duration-300 hover:bg-gray-700">Edit</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-red-600 border-gray-200 border px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm duration-300 hover:bg-gred-700">Delete</button>
                    </div>
                    </div>
                </a>
                </div>
                <div class="flex justify-end fixed bottom-10 right-10 bg-gray-50 rounded-full box-borde">
                    <button class="flex items-center justify-center w-12 h-12 text-gray-600  hover:text-black cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-[1px] border-gray-500 shadow-gray-400 shadow-sm rounded-full" onclick="openModal('modelConfirm')">
                        <i class='bx bx-plus text-[1.5rem]'></i>
                    </button>
                </div>

                <div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
                    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                        <form action="{{ route('laporan.post') }}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="flex flex-col items-center justify-center text-center cursor-pointer gap-1 p-[1rem]">
                                <div class="rounded-md border border-indigo-500 bg-gray-50 shadow-md w-36 p-4 mt-[2rem] cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300" onclick="document.getElementById('upload').click();">
                                    <div class="flex flex-col items-center gap-2 cursor-pointer">
                                        <i class='bx bx-image-add text-6xl' ></i>
                                        <span class="text-gray-600 font-medium">Upload Image</span>
                                    </div>
                                    <input id="upload" type="file" class="hidden" name="file_laporan"/>
                                </div>
                                <div class="mt-4 px-[2rem] w-full">
                                    <textarea type="text" name="tanggal" class="rounded-md block p-2.5 w-full z-20 text-sm text-gray-900 shadow-md text-center shadow-gray-200" placeholder="Keterangan"></textarea>
                                    <input type="hidden" name="jenis_laporan" value="Triwulan">
                                </div>
                                <div class="mt-4 mb-2">
                                    <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 hover:scale-95 duration-300"
                                            onclick="closeModal('modelConfirm')">Close</button>
                                   <button type="button" class="inline-flex items-center rounded-md border-[1px] bg-white border-gray-300 hover:border-gray-400 px-10 py-2 text-sm leading-4 text-black font-semibold hover:text-white shadow-sm hover:bg-gray-300 hover:scale-95 duration-300">Upload</button>
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