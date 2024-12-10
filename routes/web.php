<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AttendanceController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', [AttendanceController::class, 'index']);
Route::get('/group-attendance', [AttendanceController::class, 'groupeAttendnce'])->name('groupe.attendnce');
