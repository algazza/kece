@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center overflow-hidden font-poppins">
        <div class="flex gap-[2rem] pt-[5rem] pb-[2rem] justify-center bg-gray-200 w-screen overflow-hidden">
            <div class="bg-gray-50 w-[16rem] h-[10rem] block justify-center rounded-[5px] box-border border-[0.5px] border-black shadow-lg sm:max-w-full sm:px-6 lg:px-6">
                <div>
                    <h3 id="totalData" class="absolute ml-[0.7rem] mt-[-0.2rem] text-[1.3rem] font-semibold  mx-auto">{{ $totalData }}</h3>
                    <div class="mt-[0.5rem]">
                        <div class="text-[6rem] ">
                            <i class='text-black bx bx-bar-chart'></i>
                        </div>
                        <p class="bg-black text-white mx-[2.9rem] pb-[1px] rounded-[7px] text-[0.8rem] mt-[-2.2rem]">All incoming data</p>
                    </div>
                </div>
            </div>
            @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
            <a href="{{ route('news') }}">
            <div class="bg-gray-50 w-[16rem] h-[10rem]  justify-center rounded-[5px] box-border border-[1px] border-black shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 hidden ss:block">
                <div>
                    <div class="mt-[1.3rem]">
                        <div class="text-[5rem]">
                            <i class='text-black bx bx-news' ></i>
                        </div>
                    </div>
                    <p class="text-black mx-[4.8rem] pb-[1px] rounded-[7px] text-[0.8rem] mt-[-1.5rem] ">News Edit</p>
                </div>
            </div>
            </a>
            @endif
            @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
            <a href="{{ route('sponsor.index') }}">
            <div class="bg-gray-50 w-[16rem] h-[10rem]  justify-center rounded-[5px] box-border border-[1px] border-black shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 hidden sm:block">
                <div>
                    <div class="mt-[0.5rem]">
                        <div class="text-[6rem] ">
                            <i class='text-black bx bx-objects-horizontal-right'></i>
                        </div>
                        <p class="text-black mx-[3.8rem] pb-[1px] rounded-[7px] text-[0.8rem] mt-[-2.2rem]">Sponsor</p>
                    </div>
                </div>
            </div>
            </a>
            @endif
            @if (Auth::user()->role == 'admin' || Auth::user()->role == 'promosi' )
            <a href="{{ route('banner') }}">
            <div class="bg-gray-50 w-[16rem] h-[10rem]  justify-center rounded-[5px] box-border border-[1px] border-black shadow-lg cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 hidden md2:block">
                <div>
 
                    <div class="mt-[0.5rem]">
                        <div class="text-[6rem] ">
                            <i class='text-black bx bx-credit-card' ></i>
                        </div>
                        <p class="text-black mx-[2.9rem] pb-[1px] rounded-[7px] text-[0.8rem] mt-[-2.2rem]">Banner</p>
                    </div>
                </div>
            </div>
            <a>
            @endif
        </div>
        <div class="flex flex-col md:flex-row items-center md:items-start mt-[-1rem] gap-8 justify-center mb-[5rem] xxl:h-[50rem] h-[38rem] xl:h-[30rem] lg:h-[30rem] md:h-[30rem] sm:h-[25rem] xss:h-[25rem]">
            <div class="block  bg-gray-200 text-left overflow-auto h-[105%] mt-[0.5rem]">
                @if (Auth::user()->role == 'kredit' || Auth::user()->role == 'admin')
                    <a href="{{ route('kredit.index') }}">
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-100 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between ">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='bx bxs-bank text-black text-5xl'></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold  pt-2">Kredit</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'deposito' || Auth::user()->role == 'admin')
                    <a href="{{ route('deposito.index') }}">
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-100 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='bx bx-money-withdraw text-black text-5xl'></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold  pt-2">Deposito</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'tabungan' || Auth::user()->role == 'admin')
                    <a href="{{ route('tabungan.index') }}">
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-100 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='bx bx-wallet-alt text-black text-5xl'></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold  pt-2">Tabungan</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'pickup' || Auth::user()->role == 'admin')
                    <a href="{{ route('pickup.index') }}">
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='text-black bx bxs-truck text-5xl'></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold pt-2">PickUp</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
                    <a href="{{ route('stackholder.index') }}">
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='text-black bx bxs-business text-5xl' ></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold pt-2">Stackholder</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
                    <a href="{{ route('news') }}">
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='text-black bx bx-news text-5xl' ></i>
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
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='bx bx-user-circle text-black text-5xl'></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold pt-2">Admin</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'admin')
                    <a href="{{ route('noAdmin') }}">
                        <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                            <div class="flex">
                                <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                    <i class='bx bx-phone text-black text-5xl'></i>
                                </div>
                                <div class="block mt-[0.8rem]">
                                    <h3 class="text-[1.1rem] font-bold pt-2">Nomor</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                @endif
                @if (Auth::user()->role == 'promosi' || Auth::user()->role == 'admin')
                <a href="{{ route('sponsor.index') }}">
                    <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='bx bx-objects-horizontal-right text-black text-5xl'></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Sponsor</h3>
                            </div>
                        </div>
                    </div>
                </a>
                @endif
                @if (Auth::user()->role == 'admin' || Auth::user()->role == 'promosi' )
                <a href="{{ route('banner') }}">
                    <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='bx bx-credit-card text-black'></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Bannner</h3>
                            </div>
                        </div>
                    </div>
                </a>
                @endif
                @if (Auth::user()->role == 'admin' || Auth::user()->role == 'promosi' )
                <a href="{{ route('penghargaan.index') }}">
                    <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='bx bx-award text-black'></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Penghargaan</h3>
                            </div>
                        </div>
                    </div>
                </a>
                @endif
                @if (Auth::user()->role == 'admin' || Auth::user()->role == 'promosi')
                <a href="{{ route('manajemen.index') }}">
                    <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='bx bx-group text-black'></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Jabatan</h3>
                            </div>
                        </div>
                    </div>
                </a>
                @endif
                @if (Auth::user()->role == 'admin')
                <a href="{{ route('laporan.index') }}">
                    <div class="w-[23rem] sm:w-[35rem] h-[4.4rem] bg-gray-50 rounded-[5px] my-[0.6rem] box-border border-[0.5px] border-black shadow-md cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300 sm:flex-row lg:flex-wrap lg:justify-between">
                        <div class="flex">
                            <div class="text-[3.5rem] mt-[-0.1rem] mx-[1.5rem]">
                                <i class='bx bx-bell text-black text-5xl'></i>
                            </div>
                            <div class="block mt-[0.8rem]">
                                <h3 class="text-[1.1rem] font-bold pt-2">Laporan</h3>
                            </div>
                        </div>
                    </div>
                </a>
                @endif

           </div>
            <div class="bg-gray-50 w-23 sm:w-[33rem] my-[1rem] h-[28rem] xxl:h-[39rem] rounded-[5px] box-border border-[0.5px] border-black shadow-lg sm:flex-row lg:flex-warp relative hidden lg:block">
                
                <div class="text-left text-[1.2rem] text-black pl-[2rem] pt-[1.2rem] bg-gray-50 w-[25rem] sm:flex">
                    
                    <div>
                        
                        <p>All Person Data</p> 
                    </div>
                    
                </div>
                <div class="h-[calc(100%-4.7rem)] pb-[2rem] overflow-auto" id="content">
                        {{-- data user form --}}
                </div>
                <div class="pagination-links flex pl-[25rem] text-[1.2rem] text-black bottom-0 py-[0.5rem] absolute w-full bg-gray-50 box-border border-black border-t-[0.1px]">
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
            `;
        });
        $('#content').html(content);
    }

    function updatePagination(pagination) {
        let paginationHtml = '';

        if (pagination.current_page > 1) {
            paginationHtml += `  <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-black bg-gray-50 rounded-s hover:bg-gray-100 box-border border-[0.5px] border-gray-400 shadow-smz shadow-gray-400" data-page="${pagination.current_page - 1}">
                                        Prev
                                      </button> 
`;
        }


        if (pagination.current_page < pagination.last_page) {
            paginationHtml += `  <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-black bg-gray-50 rounded-e hover:bg-gray-100 box-border border-[0.5px] border-gray-400 shadow-smz shadow-gray-400" data-page="${pagination.current_page + 1}">
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