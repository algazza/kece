@extends('layout')
@section('content')  
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins">
  <div class="flex gap-[2rem] pt-[5rem] pb-[2rem] px-[9rem] bg-gray-200 w-screen">
      <div class="p-4 text-black dark:text-black outline-none focus:outline-none flex">
        <div class="relative flex">
        </div>

        <div class="absolute right-[10rem]">
          {{ $promo->links('vendor.pagination.simple') }}
        </div>
      </div>

      <a href="{{ route('promo.add') }}">
        <div class="flex justify-end fixed bottom-10 right-10">
          <button class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-black text-black rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </button>
        </div>
      </a>

  </div>

  <section class="py-8 grid md:grid-cols-3 md:ml-[5rem] mr-[2rem] justify-center gap-6 sm:gap-12">
    @foreach($promo as $item)
    <a href="{{ route('promo.find', $item->slug) }}">
        <div
            class="grid grid-flow-col bg-white shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl text-left cursor-pointer hover:bg-gray-100 hover:scale-105 duration-300"
        >
            <div class="rounded-l-xl w-32 h-32 sm:w-[11.5rem] sm:h-[14rem] overflow-hidden">
                <img
                    src="{{ url('/image/public/promo/' . $item->image) }}"
                    alt="{{ $item->judul }}"
                    class="object-cover w-full h-full"
                />
            </div>

            <div class="p-4 flex flex-col justify-center">
                <p class="text-sm font-bold text-merahh">{{ $item->kategory }}</p>
                <h6 class="text-base font-semibold">{{ $item->judul }}</h6>
                <p class="text-sm text-gray-600 mt-2">
                    {{ $item->tanggal }}
                </p>
            </div>
        </div>
      </a>
    @endforeach

    
</section>
</section>
<script>
  document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('searchForm');
      const filterSelect = document.getElementById('filterSelect');
      
      filterSelect.addEventListener('change', function() {
          form.submit();
      });
  });
</script>

@endsection