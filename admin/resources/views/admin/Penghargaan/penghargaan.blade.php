        @extends('layout')
        @section('content')
            <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins ">
                <div class="pt-[5rem] justify-center">
                    <h1 class="text-3xl mb-2 font-bold">Penghargaan</h1>
                </div>
                <div class="justify-center my-[6rem] lg:mx-[8rem] md:mx-[8rem] sm:mx-[3rem] xss:mx-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    @foreach ($penghargaan as $item)
                        <div class="p-8 max-w-lg bg-white rounded-2xl shadow-lg duration-300 flex flex-col items-center"href="#">
                            <div class="w-full h-[14rem]">
                                <img src="{{ url('image/public/penghargaan/' . $item->image) }}" alt="{{ $item->nama_penghargaan }}" 
                                     class="shadow rounded-lg overflow-hidden border object-cover w-full h-auto max-w-full max-h-full">
                            </div>                                                    
                            <div class="mt-8">
                                <p class="mt-2 font-bold text-gray-600">{{ $item->nama_penghargaan }}
                                </p>
                            <div class="mt-5 flex gap-2">
                                <div>
                                    <form action="{{ route('penghargaan.delete', $item->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="inline-flex items-center rounded-md border border-gray-400 bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white hover:text-white shadow-sm duration-300 hover:bg-red-700">Delete</button>
                                    </form>
                                </div>
                                <a href="{{ route('penghargaan.update.page', $item->id) }}" class="inline-flex items-center rounded-md bg-white border-gray-500 border px-3 py-2 text-sm font-medium leading-4 text-black hover:text-white shadow-sm duration-300 hover:bg-red-600">Edit</a>
                            </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="flex justify-end fixed bottom-10 right-10 bg-gray-50 rounded-full box-borde">
                    <button class="flex items-center justify-center w-12 h-12 text-gray-600  hover:text-black cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-[1px] border-gray-500 shadow-gray-400 shadow-sm rounded-full" onclick="openModal('modelConfirm')">
                        <i class='bx bx-plus text-[1.5rem]'></i>
                    </button>
                </div>

                <div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
                    <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                        <form action="{{ route('penghargaan.post') }}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="flex flex-col items-center justify-center text-center cursor-pointer gap-1 p-[1rem]">
                                <div class="rounded-md border border-gray-300 bg-gray-50 shadow-md w-36 p-4 mt-[2rem] cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300" onclick="document.getElementById('upload').click();">
                                    <div class="flex flex-col items-center gap-2 cursor-pointer">
                                        <i class='bx bx-image-add text-6xl' ></i>
                                        <span class="text-gray-600 font-medium">Upload Image</span>
                                    </div>
                                    <input id="upload" type="file" class="hidden" name="image"/>
                                </div>
                                <div class="mt-4 px-[2rem] w-full">
                                    <textarea type="text" name="nama_penghargaan" class="rounded-md block p-2.5 w-full z-20 text-sm text-gray-900 shadow-md text-center shadow-gray-200" placeholder="Keterangan"></textarea>
                                </div>
                                <div class="mt-4 mb-2">
                                    <button type="submit" class="inline-flex items-center rounded-md border-[1px] bg-white border-gray-300 hover:border-gray-400 px-10 py-2 text-sm leading-4 text-black font-semibold hover:text-white shadow-sm hover:bg-gray-300 hover:scale-95 duration-300">Upload</button>
                                    <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 hover:scale-95 duration-300"
                                            onclick="closeModal('modelConfirm')">Close</button>
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