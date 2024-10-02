@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-100 text-center justify-center items-center h-screen font-poppins overflow-auto">
        <div class="mt-[5rem] mr-[1rem] lg:mr-[10rem] ml-[2rem] lg:ml-[14rem] md:ml-[5rem] xss:ml-[3rem] sm:ml-[2rem] mb-[2rem]">
            <div class="bg-white max-w-full text-3xl font-semibold rounded-md py-3 max-sm:text-base max-md:text-xl">Add ArmorProperty</div>
            <form class="mt-[5rem]">
                <div class="flex justify-center">
                <div class="bg-white p-8 rounded-lg shadow-md my-4 w-auto">
                    <h2 class="text-lg font-bold mb-4">Unggah Gambar</h2>
                    <input type="file" id="imageInput" accept="image/*" class="mb-4 flex justify-center w-auto" onchange="previewImage(event)">
                    <div id="imagePreview" class="w-auto h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                        <span class="text-gray-500">Preview</span>
                    </div>
                </div>
            </div>
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
                        Add
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

    function previewImage(event) {
                const file = event.target.files[0];
                const reader = new FileReader();

                reader.onload = function(e) {
                    const imgPreview = document.getElementById('imagePreview');
                    imgPreview.style.backgroundImage = `url(${e.target.result})`;
                    imgPreview.style.backgroundSize = 'cover';
                    imgPreview.style.backgroundPosition = 'center';
                    imgPreview.innerHTML = ''; // Clear the preview text
                };

                if (file) {
                    reader.readAsDataURL(file);
                }
            }
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
