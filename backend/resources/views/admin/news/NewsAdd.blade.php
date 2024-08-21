@extends('layout')
@section('content')
<div class="bg-gray-100 font-[sans-serif] min-h-screen flex items-center justify-center">
    <div class="w-full max-w-[50rem] p-6">
        <div class="p-8 rounded-2xl bg-transparent shadow-md w-full">
            <form action="{{ route('news.post') }}" method="POST" class="mt-4 space-y-4" enctype="multipart/form-data">
                @csrf
                <div class="sm:flex">
                    <div class="flex justify-center items-center">
                        <div class="overflow-hidden box-border flex justify-center items-center mr-[2rem] border-blue-400 border-[4px] h-[14rem] w-[14rem]">
                            <img id="previewImage" src="" alt="" class="w-full h-full object-cover z-10" style="cursor: pointer; display: none;">
                            <div class="bg-white/90 rounded-full w-6 h-6 text-center absolute">
                                <input type="file" name="image" id="upload_profile" hidden>
                                <label for="upload_profile">
                                    <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                                    </svg>
                                </label>
                            </div>
                        </div>                                                                                            
                    </div>
                    
                    <div class="w-full">
                        <div class="mb-2">
                            <label class="text-gray-800 text-sm mt-2 block">Judul</label>
                            <div class="relative flex items-center">
                                <input name="judul" type="text" required class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                </svg>
                            </div>
                        </div>
                        <div class="mb-2 w-full">
                            <label class="text-slate-500 text-sm mt-2 block">Kategori</label>
                            <select class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" name="kategory" required>
                                <option disabled value="">kategory</option>
                                <option value="Penghargaan">Penghargaan</option>
                                <option value="Pengumuman">Pengumuman</option>
                                <option value="deposit">Deposit</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="mb-4">
                    <label class="text-slate-500 text-sm mt-2 block">Keterangan</label>
                    <textarea name="keterangan" id="editor" class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter keterangan" required></textarea>
                </div>

                <input name="penulis" type="hidden" required class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" value="{{ Auth::user()->name }}"/>
                        
                
                <div class="mt-8">
                    <button type="submit" class="bg-blue-600 text-white w-full font-normal text-md py-3 px-4 rounded-[5px] shadow-md hover:bg-blue-800 active:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">
                        create
                    </button>
                </div>
                
            </form>
        </div>
    </div>
</div>

@if(session('success'))
<div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        Error
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            There was an error processing your request.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 sm:mt-6">
                <button
                    class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                    onclick="closeModal()">
                    OK
                </button>
            </div>
        </div>
    </div>
</div>
@elseif(session('error'))
<div class="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                    <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        Error
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            There was an error processing your request.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 sm:mt-6">
                <button
                    class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                    onclick="closeModal()">
                    OK
                </button>
            </div>
        </div>
    </div>
</div>
@endif





<script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>
<script>

CKEDITOR.replace('editor');


function closeModal() {
        document.getElementById('my-modal').classList.add('hidden');
        }


document.getElementById('upload_profile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById('previewImage');
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
    } else {
        previewImage.src = '';
        previewImage.style.display = 'none'; 
    }
});


document.getElementById('previewImage').addEventListener('click', function() {
    document.getElementById('upload_profile').click();
});

</script>

@endsection
