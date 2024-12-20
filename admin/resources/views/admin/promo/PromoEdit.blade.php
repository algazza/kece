@extends('layout')

@section('content')
<div class="bg-gray-100 font-[sans-serif] min-h-screen flex items-center justify-center">
    <div class="w-full max-w-[50rem] p-6">
        <div class="p-8 rounded-2xl bg-white border border-gray-300 shadow-md w-full">
            <form action="{{ route('promo.update', $promo->slug) }}" method="POST" class="mt-4 space-y-4" enctype="multipart/form-data">
                <a href="{{ route ('promo.index') }}" class="hidden md:block xl:block">
                    <i class='bx bx-arrow-back text-4xl rounded-lg font-semibold bg-white border border-gray-300  text-red-600 px-2 hover:bg-gray-300 shadow-sm duration-300 ' ></i>
                </a>
                @csrf
                @method('PUT') 
                <div class="sm:flex">
                    <div class="flex justify-center items-center">
                        <div class="overflow-hidden box-border flex justify-center items-center mr-[2rem] border-blue-400 border-[4px] h-[17rem] w-[13rem]">
                            <img id="previewImage" src="{{ asset('image/public/promo/' . $promo->image) }}" alt="" class="w-full h-full object-cover z-10" style="cursor: pointer; display: {{ $promo->image ? 'block' : 'none' }};">
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
                                <input name="judul" type="text" required class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" value="{{ $promo->judul }}" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                </svg>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="text-gray-800 text-sm mt-2 block">Tanggal</label>
                            <div class="relative flex items-center">
                                <input id="datepicker" name="tanggal" class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" type="text" placeholder="Pilih Tanggal" value="{{ $promo->tanggal }}">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24"></svg>
                            </div>
                        </div>                        
                        
                    </div>

                    
                </div>

                <div class="mb-4">
                    <label class="text-slate-500 text-sm mt-2 block">Keterangan</label>
                    <textarea name="keterangan" id="editor" class="w-full text-slate-500 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter keterangan" required>{{ $promo->keterangan }}</textarea>
                </div>

                <div class="mt-8">
                    <button type="submit" class="bg-blue-600 text-white w-full font-normal text-md py-3 px-4 rounded-[5px] shadow-md hover:bg-blue-800 active:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">
                        Update
                    </button>
                </div>
            </form>
            <div class="mt-2">
                <form action="{{ route('promo.delete', $promo->id) }}" method="POST" class="">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="bg-red-500 text-white w-full font-normal text-md py-3 px-4 rounded-[5px] shadow-md hover:bg-red-600 active:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-colors duration-300 ease-in-out">
                        Delete
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script>
CKEDITOR.replace('editor');

flatpickr("#datepicker", {
        dateFormat: "d-m-Y",
        altInput: true,
        altFormat: "F j, Y",
        onReady: function(selectedDates, dateStr, instance) {
            setTimeout(function() {
                const yearSelect = document.querySelector(".flatpickr-current-month .numInputWrapper");
                yearSelect.style.float = "right";
                yearSelect.style.marginRight = "10px";
            }, 1);
        }
    });

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
