@extends('layout.app')
@section('title')Home @endsection
@section('content')
@include('component.nav')

    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-12 m-auto">
                <form id="attendanceForm" class="row g-3">
                    <div class="col-sm-1">
                        <label for="employeeCode" class="form-label">Employee Code:</label>
                        <input class="form-control" type="text" id="employeeCode" name="EmployeeCode" required>
                    </div>

                    <div class="col-sm-1">
                        <label for="year" class="form-label">Year:</label>
                        <input type="number" class="form-control" id="year" name="Year" required>
                    </div>

                    <div class="col-sm-1">
                        <label for="month" class="form-label">Month:</label>
                        <select class="form-select" id="month" name="Month" required>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december" selected>December</option>
                        </select>
                    </div>
                    <div class="col-auto align-self-end">
                        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mt-5">
                <div id="user-profile">
                    <!-- User Profile Table will be inserted here dynamically -->
                </div>
                <!-- Table to display the fetched attendance data -->
                <table id="attendanceTable" class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Day status</th>
                            <th>Shift In</th>
                            <th>Shift Out</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Total Hours</th>
                            <th>Late</th>
                            <th>In Time Request</th>
                            <th>Out Time Request</th>
                            <th>Remarks</th>
                            <th>Att. Status</th>
                            <th>Manual Attnd</th>
                            <th>Send Approval</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Attendance data will be inserted here -->
                    </tbody>
                </table>
            </div>           
        </div>
    </div>   
@endsection