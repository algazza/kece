@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins">
        <div class="flex gap-4 pt-12 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-200 w-screen overflow-x-auto">
            <div class="bg-gray-50 w-full sm:w-64 md:w-72 lg:w-80 h-40 flex flex-col items-center justify-center rounded-sm border border-black shadow-lg">
                <h3 id="totalData" class="text-xl font-semibold mb-2">{{ $totalData }}</h3>
                <div class="text-4xl md:text-5xl lg:text-6xl">
                    <i class='text-black bx bx-bar-chart'></i>
                </div>
                <p class="bg-black text-white px-4 py-1 rounded text-xs md:text-sm mt-2">All incoming data</p>
            </div>
            <div class="bg-gray-50 w-full sm:w-64 md:w-72 lg:w-80 h-40 flex flex-col items-center justify-center rounded-sm border border-black shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                <div class="text-4xl md:text-5xl lg:text-6xl mt-4">
                    <i class='text-black bx bx-news'></i>
                </div>
                <p class="bg-black text-white px-4 py-1 rounded text-xs md:text-sm mt-2">News Edit</p>
            </div>
            <div class="bg-gray-50 w-full sm:w-64 md:w-72 lg:w-80 h-40 flex flex-col items-center justify-center rounded-sm border border-black shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                <div class="text-4xl md:text-5xl lg:text-6xl mt-4">
                    <i class='text-black bx bx-user'></i>
                </div>
                <p class="bg-black text-white px-4 py-1 rounded text-xs md:text-sm mt-2">Sponsor</p>
            </div>
            <div class="bg-gray-50 w-full sm:w-64 md:w-72 lg:w-80 h-40 flex flex-col items-center justify-center rounded-sm border border-black shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                <div class="text-4xl md:text-5xl lg:text-6xl mt-4">
                    <i class='text-black bx bx-credit-card'></i>
                </div>
                <p class="bg-black text-white px-4 py-1 rounded text-xs md:text-sm mt-2">Edit Banner</p>
            </div>
        </div>
        
        <div class="flex h-[53%] ml-[10rem] mt-[-1rem] gap-8">
            <div class="block  bg-gray-200 text-left overflow-auto h-[105%] mt-[0.5rem]">
                @if (Auth::user()->role == 'kredit' || Auth::user()->role == 'admin')
                    <a href="{{ route('kredit.index') }}">
                        <div class="w-[31rem] h-[4.4rem] bg-gray-100 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='text-black bx bx-credit-card' ></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold  pt-2">Kredit</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                <a href="">
                    <div class="w-[31rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='text-black bx bx-credit-card' ></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Deposito</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="w-[31rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='text-black bx bx-credit-card' ></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Tabungan</h3>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="w-[31rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='text-black bx bx-home' ></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Armor Property</h3>
                               
                            </div>
                        </div>
                    </div>
                </a>
                @if (Auth::user()->role == 'pickup' || Auth::user()->role == 'admin')
                    <a href="{{ route('pickup.index') }}">
                        <div class="w-[31rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='text-black bx bxs-truck'></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold pt-2">PickUp</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'news' || Auth::user()->role == 'admin')
                    <a href="{{ route('news') }}">
                        <div class="w-[31rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='text-black bx bx-news' ></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold pt-2">News</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'admin')
                    <a href="{{ route('admin') }}">
                        <div class="w-[31rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='text-black bx bx-credit-card' ></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold pt-2">Admin</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                <a href="">
                    <div class="w-[31rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='text-black bx bx-credit-card' ></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Kredit</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="bg-gray-50 w-[26rem] my-[1rem] rounded-[5px] h-[100%] box-border border-[0.5px] border-black shadow-lg relative">
                
                <div class="text-left text-[1.2rem] text-black pl-[2rem] pt-[1.2rem] bg-gray-50 w-[25rem] sm:flex">
                    
                    <div>
                        
                        <p>All Person Data</p> 
                    </div>
                    
                </div>
                <div class="h-[calc(100%-4.7rem)] pb-[2rem] overflow-auto" id="content">
                    @foreach ($dashboard as $no => $data)
                        {{-- data user form --}}
                    @endforeach
                </div>
                <div class="pagination-links flex pl-[18rem] text-[1.2rem] text-black bottom-0 py-[0.5rem] absolute w-full bg-gray-50 box-border border-black border-t-[0.1px]">
                    {{-- {{ $dashboard->links() }} --}}
                </div>
            </div>
            
        </div>
    </section>


    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <script>
        let currentPage = 1;
        const pollingInterval = 3000;
    
            function fetchTotalData() {
        $.ajax({
            url: '/api/dashboard/total-data',
            method: 'GET',
            success: function(response) {
                $('#totalData').text(response.totalData);
            },
            error: function(xhr, status, error) {
                console.error('Gagal mengambil data total:', error);
            }
        });
    }

    function fetchData(page = 1) {
        $.ajax({
            url: `/api/dashboard/kredit?page=${page}`,
            method: 'GET',
            success: function(response) {
                currentPage = response.pagination.current_page;
                updateContent(response.data);
                updatePagination(response.pagination);
            },
            error: function(xhr, status, error) {  
                console.error('Gagal mengambil data:', error);
            }
        });
    }

    function updateContent(data) {
        console.log('updateContent')
        let content = '';
        data.forEach((item, index) => {
            const createdAt = new Date(item.created_at);
            const time = createdAt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            const date = createdAt.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

            content += `
                <a href="/dashboard/${item.id}">
                    <div class="border-b border-black border-dashed mx-8 flex items-center cursor-pointer py-2 my-2">
                        <p class="text-lg">${(currentPage - 1) * data.length + index + 1}</p>
                        <div class="px-4 text-left">
                            <h3 class="text-sm font-medium">${item.nama}</h3>
                            <div class="flex text-xs text-gray-400">
                                <p>${time}</p>
                                <p class="px-1">|</p>
                                <p>${date}</p>
                            </div>
                        </div>
                        <p class="ml-auto py-1 px-3 bg-slate-200 text-xs rounded">${item.jenis}</p>
                    </div>
                </a>
            `;
        });
        $('#content').html(content);
    }

    function updatePagination(pagination) {
        let paginationHtml = '';

        if (pagination.current_page > 1) {
            paginationHtml += `  <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" data-page="${pagination.current_page - 1}">
                                        Prev
                                      </button> 
`;
        }


        if (pagination.current_page < pagination.last_page) {
            paginationHtml += `  <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" data-page="${pagination.current_page + 1}">
                                        Next
                                       </button>`;
        }

        $('.pagination-links').html(paginationHtml);
    }

    $(document).on('click', '.pagination-link', function(e) {
        e.preventDefault();
        const page = $(this).data('page');
        if (page) {
            fetchData(page);
        }
    });

    $(document).ready(function() {
        fetchData(currentPage);
        fetchTotalData();
        setInterval(() => {
            fetchData(currentPage);
            fetchTotalData();
        }, pollingInterval);
    });

    </script>

@endsection


