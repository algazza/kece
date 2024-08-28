<?php

namespace App\Exports;

use App\Models\PickUp;
use Maatwebsite\Excel\Concerns\FromCollection;

class PickupExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return PickUp::all();
    }
}
