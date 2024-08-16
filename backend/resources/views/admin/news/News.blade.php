@extends('layout')
@section('content')  
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins">
  <div class="flex gap-[2rem] pt-[5rem] pb-[2rem] px-[9rem] bg-gray-200 w-screen">
      <div class="p-4 text-black dark:text-black outline-none focus:outline-none">
        <div class="relative flex">
            <select 
                class="bg-white dark:bg-gray-200 h-10 px-5 rounded-l-full text-sm focus:outline-none outline-none border-2 border-gray-200 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden">
                <option class="font-medium cursor-pointer" value="filter">filter</option>
                <option class="font-medium cursor-pointer" value="filter">kredit</option>
                <option class="font-medium cursor-pointer" value="filter">Deposit</option>
                <option class="font-medium cursor-pointer" value="filter">Tabungan</option>
                <option class="font-medium cursor-pointer" value="filter">Disc</option>
                <option class="font-medium cursor-pointer" value="filter">L</option>
            </select>
            
            <input 
                type="search" 
                name="search"
                placeholder="Search"
                class="bg-white dark:bg-gray-200 h-10 flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 border-gray-500 dark:border-gray-600"
                autocomplete="off" 
                spellcheck="false" 
                required 
                step="any" 
                autocapitalize="none" 
                autofocus />
            <button 
                type="submit" 
                class="absolute inset-y-0 right-0 mr-2 flex items-center px-2">
                <svg 
                    class="h-4 w-4 fill-current dark:text-white" 
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" 
                    xml:space="preserve" 
                    width="512px" 
                    height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button>
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
@endsection