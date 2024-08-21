@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-hidden">
        <section class="grid grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); pt-[3rem]">
            <div class="bg-gray-50 w-[28rem] my-[4rem] right-[58%] rounded-[5px] absolute h-[80%] box-border border-[0.5px] border-black shadow-lg overflow-hidden">
                <div class="text-left text-[1.2rem] text-black pl-[2rem] py-[1.2rem] absolute w-screen bg-gray-50 box-border border-black">
                    <p>All Person Data</p>
                </div>
                <div class="text-right pl-[18rem] text-[1.2rem] text-black bottom-0 py-[0.8rem] absolute w-screen bg-gray-50 box-border border-black border-t-[0.2px]">
                    <div class="pagination-links flex">
                        <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-300 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" data-page="${pagination.current_page + 1}">
                            Next
                        </button>
                    </div>
                </div>
                <div class=" h-full py-[4rem] overflow-auto" id="content">
                    @foreach ($deposito as $no => $data)
                    <a href="{{ route('deposito.show', $data->id) }}">
                        <div class="border-b-[0.5px]  border-black border-dashed mx-[2rem] flex items-center cursor-pointer py-[0.1rem] my-[0.8rem]">
                            <p class="text-[1.3rem]">
                                {{ $deposito->firstItem() + $loop->index }}
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

            <div class=" mt-[1.5rem] absolute left-[45%] fle">
                <div class="w-[13rem] py-[0.3rem] mb-[1rem] rounded-[7px] text-[1.1rem] font-semibold bg-gray-50 box-border border-black shadow-lg">
                    <p>Deposito</p>
                </div>
                <div class="grid grid-cols-1 gap-3">
                    <div class="w-[40rem] h-[15rem] bg-gray-50 rounded p-4 box-border border-[0.5px] border-black shadow-lg">
                        {!! $chartWeek->container() !!}
                    </div>    
                    <div class="w-[40rem] h-[15rem] bg-gray-50 rounded p-4 box-border border-[0.5px] border-black shadow-lg">
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
        const pollingInterval = 5000;  // Mengatur interval polling menjadi 5 detik
    
        $(document).ready(function() {
            function checkToken() {
                $.ajax({
                    url: '/api/check-token/deposito',
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
    
            function fetchData(page = 1) {
                $.ajax({
                    url: `/api/deposito?page=${page}`,
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
                data.forEach((item, index) => {
                    const createdAt = new Date(item.created_at);
                    const time = createdAt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
                    const date = createdAt.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    
                    content += `
                    <a href="/deposito/${item.id}">
                        <div class="border-b-[0.5px] border-black border-dashed mx-[2rem] flex items-center cursor-pointer py-[0.1rem] my-[0.8rem]">
                            <p class="text-[1.3rem]">
                                ${(currentPage - 1) * data.length + index + 1}
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
                    paginationHtml += `<button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" data-page="${pagination.current_page - 1}">
                                        Prev
                                      </button>`;
                }
    
                if (pagination.current_page < pagination.last_page) {
                    paginationHtml += `<button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" data-page="${pagination.current_page + 1}">
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
    
            fetchData(currentPage);
            setInterval(() => {
                fetchData(currentPage);
            }, pollingInterval);
    
            // Cek token setiap detik
            setInterval(checkToken, 1000);
        });
    </script>
    
@endsection