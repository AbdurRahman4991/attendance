$(document).ready(function() {
    
            // Prepare the dynamic URL with query parameters
            var apiUrl = `http://apps.amangroupbd.com:1001/api/HRMobileApi/GetDivision`;
        
            // Get JWT token from localStorage (or wherever you stored it)
            var jwtToken = localStorage.getItem("jwtToken");
        
            // If the JWT token is not found, prompt for re-login or handle accordingly
            if (!jwtToken) {
                alert("You are not logged in. Please login first.");
                return;  // Stop further execution if the token is missing
            }
        
            // Send AJAX request to fetch attendance data
            $.ajax({
                url: apiUrl, // Dynamic URL with query parameters
                method: "GET", // Assuming GET method for fetching data
                headers: {
                    "Authorization": "Bearer " + jwtToken // Add Authorization header
                },
                success: function(response) {
                    console.log("API Response:", response);  // Log the response to the console for debugging
                    
                    // Clear the table body before adding new data
                    $("#attendanceTable tbody").empty();
        
                    // Check if response has attendance data
                    if (response && response.length > 0) {
                        var id = 1;
                        // Iterate through the response and append rows to the table
                        response.forEach(function(item) {
                            $('#division').append('<option value="' + item.id + '">' + item.division + '</option>');
                        });
                    } else {
                        // If no data is found
                        $('#division').append('<option value=""> No data found </option>');                        
                    }                       
                },
                error: function(xhr, status, error) {
                    // Handle error
                    console.error("Error fetching attendance data:", error);
                    if (xhr.status === 401) {
                        alert("Unauthorized access. Please log in again.");
                        return;
                        // Optionally redirect to login page
                        window.location.href = "/";  // Adjust the path as needed
                        
                    } else {
                        alert("An error occurred while fetching the data.");
                        return;
                    }
                }
            });

            // Display attendance //

            // Submit the form and get attendance data via AJAX
    $('#groupAttendanceForm').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        var workingDate = $('#date').val();
        var Company_Id = $('#division').val(); // Replace with dynamic company ID if needed       
        // Prepare the dynamic URL with query parameters
        var apiUrl = `http://apps.amangroupbd.com:1001/api/HRMobileApi/LeaveSummeryCountapimobileApp?WorkingDate=${workingDate}&Company_Id=${Company_Id}`;
            
        // Get JWT token from localStorage (or wherever you stored it)
        var jwtToken = localStorage.getItem("jwtToken");
    
        // If the JWT token is not found, prompt for re-login or handle accordingly
        if (!jwtToken) {
            alert("You are not logged in. Please login first.");
            return;  // Stop further execution if the token is missing
        }

       
            // Make AJAX request to fetch attendance data
            $.ajax({
                url: apiUrl, // Dynamic URL with query parameters
                method: "GET", // Assuming GET method for fetching data
                headers: {
                    "Authorization": "Bearer " + jwtToken // Add Authorization header
                },
                success: function(response) {
                    console.log(response)
                    // Empty the previous table rows
                    $('#attendanceTable tbody').empty();

                    // Check if response is not empty
                    // if (response && response.length > 0) {
                    //     var rowCount = 1;
                        
                    //     // Loop through each record in the response and populate the table
                    //     $.each(response, function(index, data) {
                    //         var row = '<tr>' +
                    //             '<td>' + rowCount++ + '</td>' +                                
                    //             '<td>' + 'N/A' + '</td>' +  // You can replace this with the department if available in the data
                    //             '<td>' + (data.day_Status == "P" ? data.count : 'N/A') + '</td>' + // Present
                    //             '<td>' + (data.day_Status == "A" ? data.count : 'N/A') + '</td>' + // Absent
                    //             '<td>' + (data.day_Status == "L" ? data.count : 'N/A') + '</td>' + // Leave
                    //             '<td>' + data.count + '</td>' + // Total
                    //             '</tr>';
                            
                    //         $('#attendanceTable tbody').append(row);
                    //     });
                    // }

                    if (response && response.length > 0) {
                        var rowCount = 1;
                    
                        // Manually update the table based on each status in the response
                        var presentCount = 'N/A';
                        var absentCount = 'N/A';
                        var leaveCount = 'N/A';
                        var totalCount = 0;  // Total count based on day_status
                    
                        // Check for each status
                        $.each(response, function(index, data) {
                            if (data.day_Status == "P") {
                                presentCount = data.count;  // Set present count
                            } else if (data.day_Status == "A") {
                                absentCount = data.count;   // Set absent count
                            } else if (data.day_Status == "L") {
                                leaveCount = data.count;    // Set leave count
                            }
                            totalCount += data.count;  // Sum up total count
                        });
                    
                        // Append the row to the table (only once, no loop)
                        var row = '<tr>' +
                            '<td>' + rowCount++ + '</td>' +                            
                            '<td>' + 'N/A' + '</td>' +  // Assuming 'N/A' for the department
                            '<td>' + presentCount + '</td>' + // Present
                            '<td>' + absentCount + '</td>' + // Absent
                            '<td>' + leaveCount + '</td>' + // Leave
                            '<td>' + totalCount + '</td>' + // Total
                            '</tr>';
                    
                        // Append the row to the table
                        $('#attendanceTable tbody').append(row);
                    }
                    
                    
                },
                error: function() {
                    alert('Failed to fetch attendance data.');
                }
            });

    });
       
});
