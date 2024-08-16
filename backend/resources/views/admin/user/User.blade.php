@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200  w-screen h-screen font-poppins">

    <div class="flex-gap-[1.5rem] pt-[5rem] pl-[12rem] bg-gray-200  flex flex-col justify-start">
        <h1 class="text-xl mb-2 font-bold">Admin Page</h1>
        <div>
            <a href="{{ route('admin.add') }}">
                <Button class=" relative border-2 font-medium border-gray-800 bg-slate-50 py-2.5 px-5 uppercase text-gray-500 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:contents-[''] hover:text-black before:hover:scale-x-100 rounded-[10px]">
                    Add
                </Button> 
            </a>
        </div>
      
    </div>
    <div class="flex-gap-[1.5rem] pt-[2rem] px-[8rem] bg-gray-200 justify-center flex">
        <table class="shadow-2xl border-2 border-white w-11/12 overflow-hidden">
            <thead class="text-white">
                <tr>
                    <th class="py-3 bg-slate-400">No</th>
                    <th class="py-3 bg-slate-400">Name</th>
                    <th class="py-3 bg-slate-400">No_Handphone</th>
                    <th class="py-3 bg-slate-400">Email</th>
                    <th class="py-3 bg-slate-400">Role</th>
                    <th class="py-3 bg-slate-400">Edit</th>
                    <th class="py-3 bg-slate-400">Delete</th>
                </tr>
            </thead>
            <tbody class="text-black text-center overflow-hidden">
                @foreach ($admin as $no => $item)
                        <tr class="bg-slate-100 cursor-pointer hover:bg-slate-200 hover:scale-[1.01] duration-300"  onclick="window.location='{{ route('admin.show', ['id' => $item->id]) }}'">
                            <td class="py-6 px-3">{{ $no + 1 }}</td>
                            <td class="py-6 px-3">{{ $item->name }}</td>
                            <td class="py-6 px-3">{{   $item->no_handphone }}</td>
                            <td class="py-6 px-3">{{ $item->email }}</td>
                            <td class="py-6 px-3">{{ $item->role }}</td>
                            <td class="py-6 px-3">
                                <a href="{{ route('admin.edit', $item->id) }}">
                                    <i class='bx bx-edit text-blue-500'></i>
                                </a>
                            </td>
                            <td class="py-6 px-3">
                                <form action="{{ route('admin.delete', $item->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit"><i class='bx bx-trash text-red-500'></i></button>
                                </form>                                              
                            </td>
                        </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    
    </section>
@endsection