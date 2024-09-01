@if ($paginator->hasPages())
    <div style="display: flex; justify-content: center;">
        {{-- Link Previous --}}
        @if ($paginator->onFirstPage())
            <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s cursor-not-allowed opacity-50" disabled>
                Prev
            </button>
        @else
            <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-black bg-gray-50 rounded-s hover:bg-gray-100 box-border border-[0.5px] border-gray-400 shadow-inner shadow-gray-400">
                Prev
            </a>
        @endif

        {{-- Link Next --}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-black bg-gray-50 rounded-e hover:bg-gray-100 box-border border-[0.5px] border-gray-400 shadow-inner shadow-gray-400">
                Next
            </a>
        @else
            <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e cursor-not-allowed opacity-50" disabled>
                Next
            </button>
        @endif
    </div>
@endif
