@php use Carbon\Carbon; @endphp

@extends('layout')
@section('content')
    <section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins overflow-hidden">
        <section class="grid grid-cols-2 grid-template-columns: repeat(2, minmax(0, 1fr)); pt-[3rem]">
            <div class="bg-gray-50 w-[26rem] my-[2rem] right-[58%] rounded-[5px] absolute h-[80%] box-border border-[0.5px] border-black shadow-lg overflow-auto">
                <div class="text-left text-[1.2rem] text-black pl-[2rem] pt-[1.2rem]">
                    <p>All Person Data</p>
                </div>
                <div class=" h-full mt-[2rem]">
                    @foreach ($kredit as $no => $data)
                    <a href="{{ route('kredit.show', $data->id) }}">
                        <div class="border-b-[0.5px]  border-black border-dashed mx-[2rem] flex items-center cursor-pointer py-[0.1rem] my-[0.8rem]">
                            <p class="text-[1.3rem]">
                                {{ $no + 1 }}
                            </p>
                            <div class="block px-[1rem] text-left">
                                <h3 class="text-[0.8rem] font-medium">{{ $data->nama }}</h3>
                                <div class="flex text-[0.7rem] mt-[-0.2rem] text-gray-400">
                                    <p>{{ Carbon::parse($data->created_at)->format('H:i') }}</p>
                                    <p class="px-[0.4rem]">|</p>
                                    <p>{{ Carbon::parse($data->created_at)->format('d F Y') }}</p>
                                </div>
                            </div>
                            <p class="absolute right-[2.2rem] py-[0.1rem] px-[1.3rem] bg-slate-200 text-[0.75rem] rounded-[10px]">
                                {{ $data->jenis }}
                            </p>
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>

            <div class=" mt-[1.5rem] absolute left-[45%]">
                <div class="w-[13rem] py-[0.3rem] mb-[1rem] rounded-[7px] text-[1.1rem] font-semibold bg-gray-50 box-border border-black shadow-lg">
                    <p>Kredit</p>
                </div>
                <div class="w-[40rem] h-[12rem] bg-gray-50 rounded p-4 box-border border-[0.5px] border-black shadow-lg">
                    {!! $chart->container() !!}
                </div>    
                <div class="flex flex-wrap mt-[1rem] mr-[2rem] gap-4">
                    <div class="bg-gray-50 w-[19.5rem] rounded-[5px] box-border border-[0.2px] border-black shadow-lg h-[50%rem] text-left p-[0.9rem]">
                        <div class="text-[0.9rem]">
                            <p>Total Credit</p>
                        </div>
                        <div class="text-[1.5rem] rounded-[10px]">
                            <p>Rp. 100.000.000</p>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-[1.5rem]">
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="bg-gray-50 w-[19.5rem] rounded-[5px] box-border border-[0.2px] border-black shadow-lg h-[50%rem] text-left p-[0.9rem]">
                        <div class="text-[0.9rem]">
                            <p>Total Credit</p>
                        </div>
                        <div class="text-[1.5rem] rounded-[10px]">
                            <p>Rp. 100.000.000</p>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mt-[1.5rem]">
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            <div class="bg-gray-100 box-border border-[0.2px] border-black justify-center content-center h-[2.3rem] flex gap-[0.5rem] p-[0.1rem] rounded-[10px]">
                                <div class="bg-slate-50 rounded-[20px] w-[3rem] h-[1.5rem]  box-border border-[0.5px] border-black  justify-center text-center relative mt-[0.25rem]">
                                    <p class="text-[0.8rem] leading-[1.5rem]">300</p>
                                </div>
                                <div class="mt-[0.3rem]">
                                    <p class="text-[0.6rem]">Kredit</p>
                                    <p class="text-[0.7rem] font-semibold mt-[-0.5rem]">Investasi</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>     
        </section>
    </section>

    <script src="{{ $chart->cdn() }}"></script>
    {{ $chart->script() }}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            function checkToken() {
                console.log('Checking token...');
                $.ajax({
                    url: '/api/check-token/kredit',
                    method: 'GET',
                    success: function(response) {
                        console.log('Token check response:', response);
                        if (!response.valid) {
                            alert('Waktu Untuk Mengakses Telah Habis !!')
                            window.location.href = '/';
                        }
                    },
                    error: function() {
                        alert('Terjadi Maslaah')
                        window.location.href = '/';
                    }
                });
            }
            setInterval(checkToken,500);
        });
    </script>
    
@endsection