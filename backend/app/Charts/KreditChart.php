<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;

class KreditChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    }

    public function build(array $data, array $labels): \ArielMejiaDev\LarapexCharts\LineChart
    {
        return $this->chart->lineChart()
            ->setTitle('Sales during 2021.')
            ->addData('Physical sales', $data)
            ->setHeight(170)
            ->setXAxis($labels);
    }
}

