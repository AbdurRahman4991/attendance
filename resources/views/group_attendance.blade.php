@extends('layout.app')
@section('title')Home @endsection
@section('content')
@include('component.nav')
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="card">
                <div class="card-header text-center"> Employee Attendance History </div>
                    <div class="card-body"> 
                        <div class="col-md-12 m-auto">
                            <form id="groupAttendanceForm" class="row g-3">                           
                                <div class="col-sm-1">
                                    <label for="year" class="form-label">Date:</label>
                                    <input type="date" class="form-control" id="date" name="Date" required>
                                </div>                            
                                <div class="col-sm-1">
                                    <label for="division" class="form-label">Business unit:</label>
                                    <select class="form-select" id="division" name="division" required>
                                        <!-- Options will be populated via AJAX -->
                                    </select>
                                </div>
                                <div class="col-auto align-self-end">
                                    <button type="submit" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </form>
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
                                            <th>Department</th>                                        
                                            <th>Present</th>
                                            <th>Absent</th>
                                            <th>Leave</th>
                                            <th>Total</th>                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- Attendance data will be inserted here -->
                                    </tbody>
                                </table>
                            </div>           
                        </div>
                    </div>
            </div>            
        </div>        
    </div>               
@endsection

