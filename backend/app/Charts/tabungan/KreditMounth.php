<?php

namespace App\Charts\tabungan;

use ArielMejiaDev\LarapexCharts\LarapexChart;
use App\Models\Tabungan;
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
        $startTime = $now->copy()->subHours(8)->startOfHour();

        $Tabungan = Tabungan::whereBetween('created_at', [$startTime, $now])
                         ->select('created_at')
                         ->orderBy('created_at')
                         ->get()
                         ->groupBy(function($date) {
                             $date = Carbon::parse($date->created_at);
                             return $date->format('Y-m-d H:00');
                         });

        $intervals = [];
        $counts = [];
        $current = $startTime->copy();

        while ($current->lessThanOrEqualTo($now)) {
            $interval = $current->format('Y-m-d H:00');
            $intervals[] = $current->format('H:00');
            $counts[] = isset($Tabungan[$interval]) ? $Tabungan[$interval]->count() : 0;
            $current->addHour();
        }

        return $this->chart->lineChart()
            ->setTitle('Jumlah Entri per Jam (8 Jam Terakhir)')
            ->addData('Jumlah Entri', $counts)
            ->setHeight(210)
            ->setXAxis($intervals);
    }
}
