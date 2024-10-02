@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-100 text-center justify-center items-center h-screen font-poppins overflow-auto">
        <div class="mt-[5rem] mr-[1rem] lg:mr-[10rem] ml-[2rem] lg:ml-[14rem] md:ml-[2rem] xss:ml-[3rem] sm:ml-[2rem] mb-[2rem] ">
            <div class="bg-white max-w-full text-3xl font-semibold rounded-md py-3 max-sm:text-base max-md:text-xl">Add ArmorProperty</div>
            <form class="mt-[5rem]">

                <div class=" max-w-full">
                    <div x-data="{ files: null }" id="FileUpload"
                        class="block w-full py-2 px-3 relative bg-white appearance-none border-2 border-gray-300 border-solid rounded-md hover:shadow-outline-gray">
                        <input type="file" multiple
                               class="absolute inset-0 z-50 m-0 p-0 w-full h-full outline-none opacity-0"
                               x-on:change="files = $event.target.files; console.log($event.target.files);"
                               x-on:dragover="$el.classList.add('active')" x-on:dragleave="$el.classList.remove('active')" x-on:drop="$el.classList.remove('active')"
                        >
                        <template x-if="files !== null">
                            <div class="flex flex-col space-y-1">
                                <template x-for="(_,index) in Array.from({ length: files.length })">
                                    <div class="flex flex-row items-center space-x-2">
                                        <template
                                            x-if="files[index].type.includes('audio/')"><i class="far fa-file-audio fa-fw"></i></template>
                                        <template
                                            x-if="files[index].type.includes('application/')"><i class="far fa-file-alt fa-fw"></i></template>
                                        <template
                                            x-if="files[index].type.includes('image/')"><i class="far fa-file-image fa-fw"></i></template>
                                        <template
                                            x-if="files[index].type.includes('video/')"><i class="far fa-file-video fa-fw"></i></template>
                                        <span class="font-medium text-gray-900" x-text="files[index].name">Uploading</span>
                                        <span class="text-xs self-end text-gray-500" x-text="filesize(files[index].size)">...</span>
                                    </div>
                                </template>
                            </div>
                        </template>
                        <template x-if="files === null">
                            <div class="flex flex-col space-y-2 items-center justify-center">
                                <i class="fas fa-cloud-upload-alt fa-3x text-currentColor"></i>
                                <p class="text-gray-700">Drag your files here or click in this area.</p>
                                <a href="javascript:void(0)"
                                    class="flex items-center mx-auto py-2 px-4 text-white text-center font-medium border border-transparent rounded-md outline-none cursor-pointer  bg-red-700">Select
                                    a file</a>
                            </div>
                        </template>
                    </div>
                </div>

                <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
                <script src="https://cdn.filesizejs.com/filesize.min.js"></script>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" rel="stylesheet" />

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div class="w-auto">
                  <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Harga</label>
                  <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                </div>
                <div class="w-auto">
                  <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Alamat</label>
                  <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                </div>
                <div class="w-auto">
                  <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Alamat Lengkap</label>
                  <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                </div>
              </div>
                <div class="w-auto">
                    <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Kecamatan</label>
                    <input type="text" id="" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                    <div class="w-auto">
                      <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Bed</label>
                      <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                    </div>
                    <div class="w-auto">
                      <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Shower</label>
                      <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                    </div>
                    <div class="w-auto">
                      <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Luas Bangunan</label>
                      <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                    </div>
                    <div class="w-auto">
                      <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Luas Tanah</label>
                      <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="w-auto">
                      <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">No Handphone</label>
                      <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
                    </div>
                    <div class="w-auto">
                      <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Instagram</label>
                      <input type="text" id="no_handphone" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
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
</div>
</section>



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
