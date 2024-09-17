@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-hidden">
        <section class="grid grid-cols-1 sm:grid-cols-2 repeat(2, minmax(0, 1fr)); pt-[3rem] justify-center">
            <div class="w-full  p-4 absolute mt-[4.2rem] xxl:ml-[-20rem] xl:ml-[-18rem] lg:ml-[-16rem] z-20">
                <form id="search-form" class="flex justify-center">
                    <input type="text" id="search-input" name="search" placeholder="search by name" class="p-[6px] border border-gray-300 rounded-[15px] hidden xl:block">
                </form>
            </div>
            <div class="bg-gray-50 w-[28rem] my-[4rem] rounded-[5px] absolute ml-[3rem] lg:right-[58%] h-[80%] box-border border-[0.5px] border-black shadow-lg xss:w-[70%] sm2:w-[80%] sm:w-1/2 md:w-[30rem] lg:w-[30rem]  overflow-hidden">
                <div class="text-left text-[1.2rem] text-black pl-[2rem] py-[1.2rem] absolute w-screen bg-gray-50 box-border border-black">
                    <p>All Person Data</p>
                </div>
                <div class="text-right pl-[8rem] text-[1.2rem] text-black bottom-0 py-[0.8rem] absolute w-screen bg-gray-50 box-border border-black border-t-[0.2px] h-[3.5rem]">
                    <div class="pagination-links flex">
                        {{-- Pagination --}}
                    </div>
                </div>
                <a href="{{ route('export.tabungan') }}">
                    <div class="rounded-md border border-gray-300 bg-gray-50  shadow-md px-[0.5rem] py-[0.2rem] absolute bottom-[0.5rem] left-3 cursor-pointer hover:bg-gray-200 hover:scale-95 duration-300">
                        <label for="upload" class="flex flex-wrap items-center cursor-pointer gap-1">
                            <i class='bx bxs-file-export text-[1.8rem]'></i>
                            <span class="text-gray-600 font-medium text-[0.9rem]">Excel</span>
                        </label>
                    </div>
                </a>
                <div class=" h-full py-[4rem] overflow-auto" id="content">
                    @foreach ($tabungan as $no => $data)
                    <a href="{{ route('tabungan.show', $data->id) }}">
                        <div class="border-b-[0.5px]  border-black border-dashed mx-[2rem] flex items-center cursor-pointer py-[0.1rem] my-[0.8rem]">
                            <p class="text-[1.3rem]">
                                {{ $tabungan->firstItem() + $loop->index }}
                            </p>                            
                            <div class="block px-[1rem] text-left">
                                <h3 class="text-[0.9rem] font-medium">{{ $data->nama }}</h3>
                                <div class="flex text-[0.7rem] mt-[-0.2rem] text-gray-400">
                                    <p>{{ Carbon::parse($data->created_at)->format('H:i') }}</p>
                                    <p class="px-[0.4rem]">|</p>
                                    <p>{{ Carbon::parse($data->created_at)->format('d F Y') }}</p>
                                    <p class="px-[0.4rem]">|</p>
                                    <p>{{ $data->code }}</p>
                                </div>
                            </div>
                            <p class="ml-auto py-1 px-3 bg-slate-200 text-xs rounded">{{$data->jenis}}</p>
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>

            <div class=" mt-[2.5rem] absolute left-[45%] sm:w-1/2 ">
                <div class="w-[13rem] py-[0.3rem] mb-[1rem] hidden md2:block rounded-[7px] text-[1.1rem] font-semibold bg-gray-50 box-border border-black shadow-lg">
                    <p>Deposito</p>
                </div>
                <div class="grid grid-cols-1 gap-3">
                    <div class="w-[45rem] h-[18rem] bg-gray-50 rounded p-4 box-border border-[0.5px] border-black shadow-lg hidden lg:block">
                        {!! $chartWeek->container() !!}
                    </div>    
                    <div class="w-[45rem] h-[18rem] bg-gray-50 rounded p-4 box-border border-[0.5px] border-black shadow-lg hidden lg:block">
                        {!! $chartMonth->container() !!}
                    </div>    
                </div>
            </div>     
        </section>
    </section>

    <script src="{{ $chartWeek->cdn() }}"></script>
    {{ $chartWeek->script() }}
    <script src="{{ $chartMonth->cdn() }}"></script>
    {{ $chartMonth->script() }}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        let currentPage = 1;
        const pollingInterval = 5000;
    
        $(document).ready(function() {
            function checkToken() {
                $.ajax({
                    url: '/newwebsite/admin/public/api/check-token/tabungan',
                    method: 'GET',
                    success: function(response) {
                        if (!response.valid) {
                            alert('Waktu Untuk Mengakses Telah Habis !!');
                            window.location.href = '/';
                        }
                    },
                    error: function() {
                        alert('Terjadi Masalah');
                        window.location.href = '/';
                    }
                });
            }
    
            function fetchData(page = 1, search = '') {
                $.ajax({
                    url: `/newwebsite/admin/public/api/tabungan?page=${page}&search=${encodeURIComponent(search)}`,
                    method: 'GET',
                    success: function(response) {
                        currentPage = response.pagination.current_page;
                        updateContent(response.data);
                        updatePagination(response.pagination);
                        console.log('Data berhasil diperbarui');
                    },
                    error: function(xhr, status, error) {
                        console.error('Gagal mengambil data:', error);
                    }
                });
            }
    
            function updateContent(data) {
                let content = '';
                const perPage = 20;
                data.forEach((item, index) => {
                    const createdAt = new Date(item.created_at);
                    const time = createdAt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
                    const date = createdAt.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    
                    const nomor = (currentPage - 1) * perPage + index + 1;

                    content += `
                    <a href="/tabungan/${item.id}">
                        <div class="border-b-[0.5px] border-black border-dashed mx-[2rem] flex items-center cursor-pointer py-[0.1rem] my-[0.8rem]">
                            <p class="text-[1.3rem]">
                                ${nomor}
                            </p>
                            <div class="block px-[1rem] text-left">
                                <h3 class="text-[0.9rem] font-medium">${item.nama}</h3>
                                <div class="flex text-[0.7rem] mt-[-0.2rem] text-gray-400">
                                    <p>${time}</p>
                                    <p class="px-[0.4rem]">|</p>
                                    <p>${date}</p>
                                    <p class="px-[0.4rem]">|</p>
                                    <p>${item.code}</p>
                                </div>
                            </div>
                            <p class="ml-auto py-1 px-3 bg-slate-200 text-xs rounded">${item.jenis}</p>
                        </div>
                    </a>
                    `;
                });
                $('#content').html(content);
                console.log('Konten diperbarui');
            }
    
            function updatePagination(pagination) {
                let paginationHtml = '';
    
                if (pagination.current_page > 1) {
                    paginationHtml += `<button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-black bg-gray-50 rounded-s hover:bg-gray-100 box-border border-[0.5px] border-gray-400 shadow-md shadow-gray-400" data-page="${pagination.current_page - 1}">
                                        Prev
                                      </button>`;
                }
    
                if (pagination.current_page < pagination.last_page) {
                    paginationHtml += `<button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-black bg-gray-50 rounded-e hover:bg-gray-100 box-border border-[0.5px] border-gray-400 shadow-md shadow-gray-400" data-page="${pagination.current_page + 1}">
                                        Next
                                       </button>`;
                }
    
                $('.pagination-links').html(paginationHtml);
                console.log('Pagination diperbarui');
            }
    
            $(document).on('click', '.pagination-link', function(e) {
                e.preventDefault();
                const page = $(this).data('page');
                if (page) {
                    fetchData(page);
                }
            });
    
            $(document).on('submit', '#search-form', function(e) {
                e.preventDefault();
                const search = $('#search-input').val();
                fetchData(currentPage, search);
            });
    
            $(document).on('click', '.pagination-link', function(e) {
                e.preventDefault();
                const page = $(this).data('page');
                if (page) {
                    fetchData(page, $('#search-input').val());
                }
            });
    
            fetchData(currentPage);
            setInterval(() => {
                fetchData(currentPage, $('#search-input').val());
            }, pollingInterval);
    
            setInterval(checkToken, 1000);
        });
    </script>
    
@endsection