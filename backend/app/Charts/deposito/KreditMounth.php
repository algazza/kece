<?php

namespace App\Charts\deposito;

use ArielMejiaDev\LarapexCharts\LarapexChart;
use App\Models\Deposito;
use Carbon\Carbon;

class KreditMounth
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(): \ArielMejiaDev\LarapexCharts\LineChart
    {
        $now = Carbon::now();
        $startTime = $now->copy()->subMonth()->startOfMonth();

        // Mengelompokkan data setiap 4 hari
        $deposito = Deposito::whereBetween('created_at', [$startTime, $now])
                         ->select('created_at')
                         ->orderBy('created_at')
                         ->get()
                         ->groupBy(function($date) use ($startTime) {
                             $date = Carbon::parse($date->created_at);
                             $intervalIndex = (int)($date->diffInDays($startTime) / 4);
                             return $intervalIndex;
                         });

        $intervals = [];
        $counts = [];
        $current = $startTime->copy();
        $end = $now->copy();

        while ($current->lessThanOrEqualTo($end)) {
            $intervalStart = $current->copy();
            $intervalEnd = $intervalStart->copy()->addDays(3); // Interval 4 hari
            $intervalLabel = $intervalEnd->format('d M');
            $intervalIndex = (int)($intervalStart->diffInDays($startTime) / 4);

            $intervals[] = $intervalLabel;
            $counts[] = isset($deposito[$intervalIndex]) ? count($deposito[$intervalIndex]) : 0;

            $current->addDays(4);
        }

        return $this->chart->lineChart()
            ->setTitle('Jumlah Data Yang masuk 1 Bulan Terakhir')
            ->addData('Jumlah Entri', $counts)
            ->setHeight(210)
            ->setXAxis($intervals);
    }
}
