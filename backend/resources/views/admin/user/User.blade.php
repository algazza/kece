@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 text-center justify-center items-center h-screen font-poppins">

    <div class="flex-gap-[1.5rem] pt-[5rem] px-[8rem] bg-gray-200 justify-center flex">
        <h1 class="text-xl mb-2 font-bold">Admin Page</h1>
    </div>
    <div class="flex-gap-[1.5rem] pt-[5rem] px-[8rem] bg-gray-200  justify-center  flex">
        <table class="shadow-2xl border-2 border-white w-5/6">
            <thead class="text-white">
                <tr>
                    <th class="py-3 bg-slate-400">No</th>
                    <th class="py-3 bg-slate-400">Name</th>
                    <th class="py-3 bg-slate-400">Password</th>
                    <th class="py-3 bg-slate-400">Email</th>
                    <th class="py-3 bg-slate-400">Role</th>
                    <th class="py-3 bg-slate-400">Edit</th>
                    <th class="py-3 bg-slate-400">Delete</th>
                </tr>
            </thead>
            <tbody class="text-black text-center">
                <tr class="bg-slate-100 cursor-pointer duration-300">
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">Ambatukam@gmail.com</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">
                        <i class='bx bx-edit-alt'></i>                      
                    </td>
                    <td class="py-6 px-3">
                        <i class='bx bx-trash text-red-500'></i>                      
                    </td>
                </tr>
                <tr class="bg-slate-100 cursor-pointer duration-300">
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">
                        <i class='bx bx-edit-alt'></i>                      
                    </td>
                    <td class="py-6 px-3">
                        <i class='bx bx-trash text-red-500'></i>                      
                    </td>
                </tr>
                <tr class="bg-slate-100 cursor-pointer duration-300">
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">
                        <i class='bx bx-edit-alt'></i>                      
                    </td>
                    <td class="py-6 px-3">
                        <i class='bx bx-trash text-red-500'></i>                      
                    </td>
                </tr>
                <tr class="bg-slate-100 cursor-pointer duration-300">
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">
                        <i class='bx bx-edit-alt'></i>                      
                    </td>
                    <td class="py-6 px-3">
                        <i class='bx bx-trash text-red-500'></i>                      
                    </td>
                </tr>
                <tr class="bg-slate-100 cursor-pointer duration-300">
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">
                        <i class='bx bx-edit-alt'></i>                      
                    </td>
                    <td class="py-6 px-3">
                        <i class='bx bx-trash text-red-500'></i>                      
                    </td>
                </tr>
                <tr class="bg-slate-100 cursor-pointer duration-300">
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">
                        <i class='bx bx-edit-alt'></i>                      
                    </td>
                    <td class="py-6 px-3">
                        <i class='bx bx-trash text-red-500'></i>                      
                    </td>
                </tr>
                <tr class="bg-slate-100 cursor-pointer duration-300">
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">hoooo</td>
                    <td class="py-6 px-3">
                        <i class='bx bx-edit-alt'></i>                      
                    </td>
                    <td class="py-6 px-3">
                        <i class='bx bx-trash text-red-500'></i>                      
                    </td>
                </tr>
               
            </tbody>
        </table>
    </div>
    <div class="pt-[1.5rem]">
        <Button class=" relative border-2 font-medium border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:contents-[''] hover:text-white before:hover:scale-x-100 rounded-[5px]">
            Edit
        </Button>
    </section>
@endsection