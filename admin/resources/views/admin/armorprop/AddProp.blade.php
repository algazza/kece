@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-100 text-center justify-center items-center h-screen font-poppins overflow-auto">
        <div class="mt-[5rem] mr-[10rem] ml-[2rem] lg:ml-[14rem] md:ml-[2rem] xss:ml-[3rem] sm:ml-[2rem] mb-[2rem] ">

                <div class="w-auto">
                    <label for="no_handphone" class="block text-gray-700 font-semibold mb-1">Pekerjaan</label>
                    <input type="text" id="" name="no_handphone" class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />
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
