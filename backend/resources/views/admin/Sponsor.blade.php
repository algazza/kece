@extends('layout')
@section('content')
<section class="box-border p-0 m-0 bg-gray-200 font-poppins">

    <section id="testimonials" aria-label="What our customers are saying" class=" py-20 sm:py-32">
        <div class=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div class="mx-auto max-w-2xl md:text-center ">
            <h2 class="font-display text-3xl tracking-tight text-center text-slate-900 sm:text-4xl bg-white py-4 px-8 rounded-md shadow-md ">Companies We Are Sponsor</h2>
          </div>
          <ul role="list"  
            class="mx-auto mt-8 grid max-w-2xl   grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 cursor-pointer hover:bg-gray-100 hover:scale-95 duration-300"><svg aria-hidden="true"
                      width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                      </path>
                    </svg>
                    <blockquote class="relative">
                        <div class="flex">
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Name</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nik</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Email</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Alamat Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">No Hp</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Nama Usaha</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px]">Notes</p>
                            </div>
                            <div>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 092e409201</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Wahitukam@gmail.com</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[5px] px-3"> : Jl. Ghaza 12 no 2</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : 021452310546</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Padang Ghaza</p>
                                <p class="text-lg tracking-tight text-slate-900 py-[6px] px-3"> : Jadon</p>
                            </div>
                        </div>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Wahit mebel</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
        
           
          </ul>
        </div>
      </section>
   
    
@endsection