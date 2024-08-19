@if ($paginator->hasPages())
    <div style="display: flex; justify-content: center;">
        {{-- Link Previous --}}
        @if ($paginator->onFirstPage())
            <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s cursor-not-allowed opacity-50" disabled>
                Prev
            </button>
        @else
            <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
            </a>
        @endif

        {{-- Link Next --}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
            </a>
        @else
            <button class="pagination-link flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e cursor-not-allowed opacity-50" disabled>
                Next
            </button>
        @endif
    </div>
@endif
