<?php

namespace App\Exports;

use App\Models\Kredit;
use Maatwebsite\Excel\Concerns\FromCollection;

class KreditExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Kredit::all();
    }
}
