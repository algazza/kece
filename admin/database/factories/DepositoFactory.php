<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Deposito>
 */
class DepositoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'no_handphone' => $this->faker->numerify('08##########'),
            'nik' => $this->faker->numerify('##########'),
            'pekerjaan' => $this->faker->jobTitle(),
            'alamat' => $this->faker->address(),
            'total_pinjaman' => $this->faker->numberBetween(1000000, 100000000),
            'jangka_waktu' => $this->faker->numberBetween(1, 30) . ' tahun',
            'jenis_angunan' => $this->faker->word(),
            'perhitungan_bunga' => $this->faker->randomElement(['flat', 'efektif', 'anuitas']),
            'penghasilan_perbulan' => $this->faker->numberBetween(3000000, 50000000),
            'catatan' => $this->faker->sentence(),
            'jenis' => $this->faker->randomElement(['Deposito']),
            'code' => $this->faker->numerify('##########'),
            'ip_user' => $this->faker->ipv4(), // Menambahkan IP User
            'created_at' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'updated_at' => $this->faker->dateTimeBetween('-1 month', 'now'), // Mengatur updated_at untuk konsistensi
        ];
    }
}
