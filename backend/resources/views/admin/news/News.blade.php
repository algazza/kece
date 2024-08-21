@extends('layout')
@section('content')  
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins">
  <div class="flex gap-[2rem] pt-[5rem] pb-[2rem] px-[9rem] bg-gray-200 w-screen">
      <div class="p-4 text-black dark:text-black outline-none focus:outline-none flex">
        <div class="relative flex">
          <form action="{{ route('news') }}" method="GET" id="searchForm" class="flex items-center">
            <select 
                name="filter" 
                id="filterSelect"
                class="bg-white dark:bg-gray-200 h-10 px-5 rounded-l-full text-sm focus:outline-none border-2 border-gray-200 dark:border-gray-600 cursor-pointer">
                <option value="">All</option>
                <option value="Penghargaan" {{ request('filter') == 'Penghargaan' ? 'selected' : '' }}>Penghargaan</option>
                <option value="Promo" {{ request('filter') == 'Promo' ? 'selected' : '' }}>Promo</option>
                <option value="Siaran Pers" {{ request('filter') == 'Siaran Pers' ? 'selected' : '' }}>Siaran Pers</option>
                <option value="Pengumuman" {{ request('filter') == 'Pengumuman' ? 'selected' : '' }}>Pengumuman</option>
            </select>
            <input 
                type="search" 
                name="search"
                placeholder="Search"
                value="{{ request('search') }}"
                class="bg-white dark:bg-gray-200 h-10 px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-gray-500 dark:border-gray-600"
                autocomplete="off" 
                spellcheck="false" 
                autofocus />
        </form>
        
        </div>

        <div class="absolute right-[10rem]">
          {{ $news->links('vendor.pagination.simple') }}
        </div>
      </div>

      <a href="{{ route('news.form') }}">
        <div class="flex justify-end fixed bottom-10 right-10">
          <button class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-slate-200 hover:scale-105 duration-300 border-2 border-black text-black rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </button>
        </div>
      </a>

  </div>

  <section class="py-8 grid md:grid-cols-x480 justify-center gap-6 sm:gap-12">
    @foreach($news as $item)
    <a href="{{ route('news.edit', ['id' => $item->id]) }}">
        <div
            class="grid grid-flow-col shadow-[3px_5px_9px_1px_#1e1e1e1e] rounded-xl cursor-pointer text-left"
        >
            <div class="rounded-l-xl w-32 h-32 sm:w-40 sm:h-40 overflow-hidden">
                <img
                    src="{{ url('/image/public/news/' . $item->image) }}"
                    alt="{{ $item->judul }}"
                    class="object-cover w-full h-full"
                />
            </div>

            <div class="p-4 flex flex-col justify-center">
                <p class="text-sm font-bold text-merahh">{{ $item->kategory }}</p>
                <h6 class="text-lg font-semibold">{{ $item->judul }}</h6>
                <p class="text-sm text-gray-600 mt-2">
                    {{ \Carbon\Carbon::parse($item->created_at)->format('d-m-Y') }}
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